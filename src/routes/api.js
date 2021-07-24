import express from "express"
import path from "path"
const router = new express.Router()
import multer from "multer"


// multer filer upload storage
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})

// middlewares

import { auth, authUnverified } from "../middlewares/auth"
import  filters from "../middlewares/filters"
import * as user from "../controllers/user-controller"
import * as taskController from "../controllers/task-controller"
const {
    totalTasks,
    averageCompletedTasksPerDay,
    overDueTasks,
    maxTasksCompletionDay,
    tasksOpenInDayOfWeek,
} = require('../controllers/report-controller')







//User
router.post('/v1/signin', user.signin)
router.post('/v1/signup', user.signup)
router.post('/v1/verify-email', authUnverified , user.verifyEmail)
router.post('/v1/signout', [auth], user.signout)
router.get('/v1/users', [filters], user.index)
router.get('/v1/user/profile', [auth], user.profile)
router.put('/v1/user/profile', [auth], user.update)
router.delete('/v1/user/:id', [auth], user.destroy)
router.post('/v1/pass-reset-email', user.sendPasswordResetEmail)
router.post('/v1/reset-pass-link/:token', user.resetPasswordByLink)


//Task
router.get('/v2/tasks', [filters], taskController.test)
router.get('/v1/tasks', [ auth, filters], taskController.index)
router.post('/v1/task', [ auth ], taskController.create)
router.get('/v1/task/:id', [ auth ], taskController.view)
router.get('/v1/task/:id/edit', [ auth ], taskController.edit)
router.put('/v1/task/:id', [auth], taskController.update)
router.delete('/v1/task/:id', [auth], taskController.destroy)


// Attachments
router.post('/v1/upload/', [
        auth, 
        // (req,res,next) => { console.log(req.body.taskId); if(!req.body.taskId) return res.status(400).send({ status: "error", message: "taskId missing" }); else next() } ,
        upload.single('file')
    ],
    taskController.attachments,
    (err, req, res, next) => {
    res.send({error: err.message})
})



// Reports

router.get('/v1/report/totalTasks', [ auth ], totalTasks)
router.get('/v1/report/averageCompletedTasksPerDay', [ auth ], averageCompletedTasksPerDay)
router.get('/v1/report/overDueTasks', [ auth ], overDueTasks)
router.get('/v1/report/maxTasksCompletionDay', [ auth ], maxTasksCompletionDay)
router.get('/v1/report/tasksOpenInDayOfWeek', [ auth ], tasksOpenInDayOfWeek)




// Similar tasks
router.get('/v1/similar-tasks', auth, taskController.similarTasks)



// Test email endpoints
// router.get('/v1/test-reminder-email', scheduleController.sendReminderEmail)
// router.get('/v1/test-sessions', taskController.sessions)
// router.get('/v1/test-sessions-get', taskController.sessionsGet)


export default router


