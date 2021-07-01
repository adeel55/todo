import request from "supertest"
import app from "../src/app"
import bcrypt from "bcryptjs"
const { User , Task,  Sequelize,Sequelize:{ Op } } = require('../models')
import { user1, user2, beforFun } from "./fixtures/db/db"
beforeAll(beforFun)

test("signup and verify email for user1" , async () => {

    const signupRes = await request(app)
    .post("/api/v1/signup")
    .send({
        fullName: user1.fullName,
        email: user1.email,
        password: user1.password,
    })
    .expect(200)

    let user = await User.findOne({
        where: {
            id: signupRes.body.user.id
        }
    }).catch(e => console.log(e))

    user1.token = signupRes.body.token


    const emailVerifyRes = await request(app)
    .post("/api/v1/verify-email")
    .set("Authorization", `Bearer ${ user.token }`)
    .send({
        emailVerificationCode: user.emailVerificationCode
    })
    .expect(200)

})

test("signup and verify email for user2" , async () => {

    const signupRes = await request(app)
    .post("/api/v1/signup")
    .send({
        fullName: user2.fullName,
        email: user2.email,
        password: user2.password,
    })
    .expect(200)

    let user = await User.findOne({
        where: {
            id: signupRes.body.user.id
        }
    }).catch(e => console.log(e))

    user2.token = signupRes.body.token


    const emailVerifyRes = await request(app)
    .post("/api/v1/verify-email")
    .set("Authorization", `Bearer ${ user.token }`)
    .send({
        emailVerificationCode: user.emailVerificationCode
    })
    .expect(200)

})


test("signin user" , async () => {

    const loginRes = await request(app)
    .post("/api/v1/signin")
    .send({
        email: user1.email,
        password: user1.password,
    })
    .expect(200)

    user1.token = loginRes.body.token

})