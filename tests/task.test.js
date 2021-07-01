import request from "supertest"
import app from "../src/app"
// const bcrypt = require('bcryptjs')
// const userSeed = require("../seeders/20210608054130-users")
const { User , Task,  Sequelize,Sequelize:{ Op } } = require('../models')
import { user1, user2 } from "./fixtures/db/db"
import { task } from "./fixtures/db/db"

beforeAll(async () => {

    let res = await request(app)
    .post("/api/v1/signin")
    .send({
        email: user1.email,
        password: user1.password
    })
    user1.token = res.body.token

    res = await request(app)
    .post("/api/v1/signin")
    .send({
        email: user2.email,
        password: user2.password
    })
    user2.token = res.body.token
})

test("create a new task", async () => {
    const resCreate = await request(app)
    .post("/api/v1/task")
    .set("Authorization",`Bearer ${ user1.token }`)
    .send({ 
        title: "my testing task",
        description: "hellow world how are you????",
        startDate: new Date(),
        dueDate: new Date("2021-07-30") 
    })
    .expect(201)

    task = await Task.findOne({
        where: {
            id: resCreate.body.task.id
        }
    })

    expect(task).not.toBeNull()
})

test("Update Task", async () => {
    
    
        let updatedTask = { 
            title: "my testing task now updated",
            description: "hellow world how are you i am new one????",
            startDate: new Date(),
            dueDate: new Date("2021-07-30") 
        }

    const resUpdate = await request(app)
    .put(`/api/v1/task/${task.id}`)
    .set("Authorization",`Bearer ${ user1.token }`)
    .send(updatedTask)
    .expect(200)

    let updatedTaskDB = await Task.findOne({
        where: {
            id: task.id
        }
    })

    expect(updatedTaskDB.description).toBe(updatedTask.description)
    
})


test("upload attachments with task", async () => {

    await request(app)
    .post("/api/v1/upload")
    .set("Authorization", `Bearer ${user1.token}`)
    .attach("file", "tests/fixtures/task-image.jpeg")
    .field({ taskId : task.id })
    .expect(200)

})


test("unauthorized user should not destroy task", async () => {

    await request(app)
    .delete(`/api/v1/task/${ task.id }`)
    .set("Authorization", `Bearer ${user2.token}`)
    .expect(401)

})



test("destroy task", async () => {

    await request(app)
    .delete(`/api/v1/task/${ task.id }`)
    .set("Authorization", `Bearer ${user1.token}`)
    .expect(200)

})