const bcrypt = require('bcryptjs')
const { User , Sequelize:{ Op } } = require('../../models')
const notification = require("./notification-controller")

export async function index (req, res) {
    let where = { }
    if(req.query.search){
        where = {
            ...where,
            [Op.or]: [
                {
                    fullName: {
                        [Op.substring]: req.query.search
                    }
                },
                {
                    email: {
                        [Op.substring]: req.query.search
                    }
                },
                {
                    phone: {
                        [Op.substring]: req.query.search
                    }
                }
            ]
        }
    }
    if(req.filter.hasDate)  where['createdAt'] = req.filter.date
    
    let users = await User.findAndCountAll({
        attributes: ['id', 'fullName', 'email', 'updatedAt', 'createdAt'],
        where,
        order: [['createdAt', 'DESC']],
        offset: req.pagination.offset,
        limit: req.pagination.limit,
    }).catch(e => console.log(e))

    return res.send({data: users, status: 'success'})
}
export async function signup (req, res) {

    try {
        
        let existUser = await User.findOne({
            where: {
                email: req.body.email
            }
        }).catch(e => console.log(e))

        if (existUser) {
            return res.status(400).send({
                status: "error",
                message: "email already taken"
            })
        }

        const user = await User.create({
            fullName: req.body.fullName,
            email: req.body.email,
        }).catch(e => {
            console.log(e)
            throw Error("Invalid email")
        })

        await user.generateAndSaveNewPassword(req.body.password)

        // generate and send email-verification code notification by email
        let code = await user.generateEmailVerificationCode()
        notification.email(req.body.email,
            'Email Verification Code',
            'email-verification-code', {
            code
        })

        let token = await user.generateAuthToken()

        let userSend = {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            token
        }

        return res.send({
            user: userSend,
            status: 'success',
            message: "An email has been sent to you with verification code please verify your email with that 6 digit code.",
            token
        })

    } catch (err) {

        return res.send({
            status: 'false',
            message: "bad request",
            err
        })
    }

}
export async function verifyEmail (req, res) {

    if(req.user.emailVerificationCode == req.body.emailVerificationCode){
        req.user.emailVerifiedAt = new Date()
        await req.user.save()
        return res.send({
            message: "email successfully verified",
            status: "success",
        })
    }else{
        return res.status(400).send({
            status: "error",
            message: "invalid email verification code provided",
        })
    }
}
export async function signin (req, res) {

    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    }).catch(e => console.log(e))

    if(!user){
        return res.status(400).send({ message: `Invalid email provided`})
    }
    
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if(!isMatch){
        return res.status(400).send({ message: `Invalid email/password provided`})
    }

    
    let token = await user.generateAuthToken()

    return res.send({
        user: {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            token
        },
        token,
        status: "success",
        message: "signin successfull"
      })


}
export async function signout(req, res) {
    if(!req.user){
        const token = req.body.token || null
        const user = await User.findOne({ where: { token }})
        await user.signOut()
        return res.render('./views/login')
    }
    await req.user.signOut()
    return res.send({ status: "success", message: "signout successfully" })
}
export async function edit (req,res) {
    let user = await User.findOne({
        attributes: ['id','fullName','email','updatedAt','createdAt'],
        where: {
            id: req.params.id,
        }
    }).catch(e => console.log(e))
    return res.send({ data: {user}, status: 'success'})
}
export async function update (req,res) {
    await User.update({
        fullName: req.body.user.fullName,
        email: req.body.user.email,
    },
    {   where: {id:req.params.id} }).catch(e => {
        console.log(e)
        return res.send({ message: `Sorry user email duplication error.`, status: 'error'})
    })

    return res.send({ message: `User info updated successfully.`, status: 'success'})
}
export async function destroy (req,res) {
    await User.destroy({where:{id:req.params.id}}).catch(e => console.log(e))
    return res.send({ message: 'User deleted!', status: 'success'})
}
export async function setPassword(req,res) {
    try {
        const token = req.body.token || null
        const user = await User.findOne({ where: { token }})
        await user.generateAndSaveNewPassword(req.body.password)
        return res.render('./views/login-oauth', {
            status: "success", 
            message: "New password set successfully",
        })
    } catch(err){
        return res.status(400).send({status: 'bad request', message: 'error occur during changing password'})
    }
}
export async function passportCallbackOauth2  (accessToken, refreshToken, profile, cb) {
    const user = await User.findOne({
        where: {
            email: profile._json.email,
        }
    })
    if(user){
        user.token = accessToken
        await user.save()
    }else{
        await User.create({
            fullName: profile._json.name,
            email: profile._json.email,
            emailVerifiedAt: new Date(),
            token: accessToken,
        }).catch(err => console.log(err))
    }
    return cb(null,profile);
}
export async function Oauth2Callback(req, res)  {
    // console.log(req.session)
    let status,message = ""
    const user = await User.findOne({ 
        where: { 
            email: req.session.passport.user._json.email,
        }
    })
    req.session.accessToken = user.token
    if(user){
        status = "success", 
        message = "You are successfully logged in with " + req.session.passport.user.provider
    }else{
        status = "danger", 
        message = "Failed to authenticate with Oauth 2.0"
    }

    return res.redirect(`/login-oauth?status=${status}&message=${message}`)

}


export default {
    index,
    signup,
    verifyEmail,
    signin,
    edit,
    update,
    destroy,
}