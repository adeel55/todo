const bcrypt = require('bcryptjs')
const { User , Sequelize,Sequelize:{ Op } } = require('../../models')

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
    }).catch(e => console.log(e))

    await user.generateAndSaveNewPassword(req.body.password)
    let code = await user.generateEmailVerificationCode()
    sendEmailVerificationCode(code)
    let token = await user.generateAuthToken()

    let userSend = {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        token
    }

    return res.send({ user: userSend, status: 'success' , message : "An email has been sent to you with verification code please verify your email with that 6 digit code.", token})

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

module.exports = {
    index,
    signup,
    verifyEmail,
    signin,
    signout,
    edit,
    update,
    destroy
}