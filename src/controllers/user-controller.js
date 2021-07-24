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

        return res.status(201).send({
            user: userSend,
            status: 'success',
            message: "An email has been sent to you with verification code please verify your email with that 6 digit code.",
            token
        })

    } catch (err) {

        return res.status(400).send({
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
export async function sendPasswordResetEmail (req, res) {

    // find the required user with provided email
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    }).catch(e => {
        return res.status(400).send({
            status: "error",
            message: "database error",
        })
    })
    if(user) {
        // find user and get token
        const token = await user.generateAuthToken()
        const link = process.env.BASE_URL + "/api/v1/reset-pass-link/" + token
        // send email notification
        notification.email(req.body.email,
            'Reset Password',
            'pass-reset-code', {
            link
        })
        
        return res.send({
            message: "password reset email successfully sent",
            status: "success",
        })

    }else{
        // return response with error if user not found
        return res.status(400).send({
            status: "error",
            message: "sorry! user not found with provided email. please signup first.",
        })

    }
}
export async function resetPasswordByLink (req, res) {

    // find the required user with provided email
    const user = await User.findOne({
        where: {
            token: req.params.token
        }
    }).catch(e => {
        return res.status(400).send({
            status: "error",
            message: "database error",
        })
    })
    if(user) {
        // find user and set new password
        await user.generateAndSaveNewPassword(req.body.password)
        return res.send({
            message: "password reset successfully",
            status: "success",
        })
    }else{
        // return response with error if user not found
        return res.status(400).send({
            status: "error",
            message: "sorry! link expired",
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
        return res.status(401).send({ message: `Invalid email provided`})
    }
    
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if(!isMatch){
        return res.status(401).send({ message: `Invalid email/password provided`})
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
export async function profile (req,res) {
    try{
        let user = await User.findOne({
            attributes: ['id','fullName','email','updatedAt','createdAt'],
            where: {
                id: req.user.id,
            }
        }).catch(e => console.log(e))
        return res.send({ data: {user}, status: 'success'})
    } catch(error){
        return res.status(400).send({ error, status: 'error'})
    }
}
export async function update (req,res) {
    const user = await User.findOne({   where: {id:req.user.id} })
    .catch(error => {
        return res.status(400).send({ error, message: `Sorry user email duplication error.`, status: 'error'})
    })

    user.fullName = req.body.fullName
    user.generateAndSaveNewPassword(req.body.password)

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