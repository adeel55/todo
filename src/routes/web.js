const express = require('express')
const path = require('path')
const router = new express.Router()
const multer = require('multer')
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

const { auth, authUnverified } = require('../middlewares/auth')
const { filters } = require('../middlewares/filters')

const userController = require('../controllers/user-controller')
const taskController = require('../controllers/task-controller')
const reports = require('../controllers/report-controller')

const scheduleController = require('../controllers/scheduled-controller')







//User
router.post('/v1/signin', userController.signin)
router.post('/v1/signup', userController.signup)
router.post('/v1/verify-email', [authUnverified], userController.verifyEmail)
router.post('/v1/signout', [auth], userController.signout)
router.get('/v1/users', [filters], userController.index)
router.get('/v1/user/:id/edit', [auth], userController.edit)
router.put('/v1/user/:id', [auth], userController.update)
router.delete('/v1/user/:id', [auth], userController.destroy)


//Task
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

router.get('/v1/report/totalTasks', [ auth ], reports.totalTasks)
router.get('/v1/report/averageCompletedTasksPerDay', [ auth ], reports.averageCompletedTasksPerDay)
router.get('/v1/report/overDueTasks', [ auth ], reports.overDueTasks)
router.get('/v1/report/maxTasksCompletionDay', [ auth ], reports.maxTasksCompletionDay)
router.get('/v1/report/tasksOpenInDayOfWeek', [ auth ], reports.tasksOpenInDayOfWeek)




// Similar tasks
router.get('/v1/similar-tasks', auth, taskController.similarTasks)


// Test email endpoints
router.get('/v1/test-reminder-email', scheduleController.sendReminderEmail)



module.exports = router