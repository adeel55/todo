const jwt = require('jsonwebtoken')
const { User } = require('../../models')


export async function auth (req,res,next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const user = await User.findOne({ where: { token }})
        if(!user.emailVerifiedAt){
            let token = await user.generateAuthToken()
            return res.status(401).send({ 
                message: 'Sign up process incomplete. Please verify your email.',
                token
            })
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ message: 'Authentication failed or session expired please signin again.' })
    }
}

export async function authUnverified(req,res,next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const user = await User.findOne({ where: { token }})
        if (!user || user.archived) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ message: 'Authentication failed or session expired please signin again.' })
    }
}
