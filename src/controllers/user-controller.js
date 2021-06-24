const bcrypt = require('bcryptjs')
const { User , Sequelize:{ Op } } = require('../../models')
const notification = require("./notification-controller")

index = async (req,res) => {
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

signup = async (req, res) => {

   try {
    let existUser = await User.findOne({
        where: {
            email: req.body.email
        }
    }).catch(e => console.log(e))

    if(existUser){
        return res.status(400).send({ status: "error" , message: "email already taken"})
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
    notification.email(req.body.email,'Email Verification Code','email-verification-code',{code})
    
    let token = await user.generateAuthToken()

    let userSend = {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        token
    }
    
    return res.send({ user: userSend, status: 'success' , message : "An email has been sent to you with verification code please verify your email with that 6 digit code.", token})

   } catch(err){

       return res.send({ status: 'false' , message : "bad request"})
   }

}

verifyEmail = async (req, res) => {

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

signin = async (req, res) => {

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

signout = async (req, res) => {
    await req.user.signout()
    return res.send({ status: "success", message: "signout successfully" })
}

edit = async (req,res) => {
    let user = await User.findOne({
        attributes: ['id','fullName','email','updatedAt','createdAt'],
        where: {
            id: req.params.id,
        }
    }).catch(e => console.log(e))
    return res.send({ data: {user}, status: 'success'})
}
update = async (req,res) => {
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
destroy = async (req,res) => {
    await User.destroy({where:{id:req.params.id}}).catch(e => console.log(e))
    return res.send({ message: 'User deleted!', status: 'success'})
}

sendEmailVerificationCode = async(code) => {
    // send email
    // console.log('Email verificcation code: ')
    // console.log(code)
}

setPassword = async (req,res) => {
    let data = {}
    const user = await User.findOne({
        where: {
            token: req.body.token
        }
    }).catch(e => console.log(e))

    if(user){
        await user.generateAndSaveNewPassword(req.body.password)
        data = { 
            status: "success", 
            message1: "New password set successfully",
            message2: "You are successfully logged in"
        }
    }else{
        data = { 
            status: "success", 
            message1: "User not found",
            message2: "Failed to set new password"
        }
    }
        
    return res.render('./views/login-success', data)

}

facebookPassport = async (accessToken, refreshToken, profile, cb) => {
    await User.create({
        fullName: profile._json.name,
        email: profile._json.email,
        emailVerifiedAt: new Date(),
        token: accessToken,
    }).catch(err => console.log(err))
    return cb(null,profile);
}
googlePassport = async (accessToken, refreshToken, profile, done) => {
    await User.create({
        fullName: profile._json.name,
        email: profile._json.email,
        emailVerifiedAt: new Date(),
        token: accessToken,
    }).catch(err => console.log(err))
    return done(null, profile)
}
facebookCallback = async (req, res) => {
    // console.log(req.session)
    const user = await User.findOne({ 
        where: { 
            email: req.session.passport.user._json.email,
        }
    })

    if(user){

        if(user.password){
            return res.render('./views/login-success',{ 
                status: "success", 
                message1: "",
                message2: "You are successfully logged in"
            })
        }else{
            return res.render('./views/login-password', { 
                data: { 
                    email: req.session.passport.user._json.email,
                    token: user.token
                }
            })
        }

    }else{
        return res.render('./views/login-success',{ 
            status: "success", 
            message1: "User not fount",
            message2: "Failed to authenticate with facebook"
        })
    }
}
googleCallback = async (req, res) => {
    // console.log(req.session)
    const user = await User.findOne({ 
        where: { 
            email: req.session.passport.user._json.email,
        }
    })

    if(user){

        if(user.password){
            return res.render('./views/login-success',{ 
                status: "success", 
                message1: "",
                message2: "You are successfully logged in"
            })
        }else{
            return res.render('./views/login-password', { 
                data: { 
                    email: req.session.passport.user._json.email,
                    token: user.token
                }
            })
        }

    }else{
        return res.render('./views/login-success',{ 
            status: "success", 
            message1: "User not fount",
            message2: "Failed to authenticate with facebook"
        })
    }
}


module.exports = {
    index,
    signup,
    verifyEmail,
    signin,
    signout,
    edit,
    update,
    destroy,
    setPassword,
    facebookPassport,
    googlePassport,
    facebookCallback,
    googleCallback,
}