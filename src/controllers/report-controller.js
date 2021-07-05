import { connect } from "http2"
import redis from "redis"
const client = redis.createClient({
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
        password: process.env.REDIS_PASS,
        no_ready_check: true
    })
const { promisify } = require('util')
client.get = promisify(client.get)
client.hget = promisify(client.hget)
client.on("connect", function() {
    console.error("redis connected");
});
client.on("error", function(error) {
    console.error(error);
});
const { Task , Attachment, Sequelize:{ Op }, sequelize } = require('../../models')

export async function totalTasks(req,res) {

    var data = {
        completed: 0,
        incompleted: 0,
        total: 0,
        source: 'mysql db'
    }

    // check if cache exist 
    var cacheData = await client.get(req.user.id + `:report1`)
    
    if(!cacheData)
    {   
        // Total tasks
        let tasks = await Task.count({
            where: {
                userId: req.user.id,
            },
            group: ['status']
        }).catch(e => console.log(e))

 
        for(let val of tasks) {
            data.total = Number(val.count) + Number(data.total)
            if(val.status == 1) data.completed = val.count
            if(val.status == 0) data.incompleted = val.count
        }


        client.set(req.user.id + `:report1`, JSON.stringify(data), 'EX', process.env.REDIS_EXPIRE)
        
    }else{
        data = {  ...JSON.parse(cacheData), source: 'redis cache'}
    }

    return res.send({ data, status: 'success'})

}
export async function averageCompletedTasksPerDay(req,res) {

    var data = {
        averageDailyTaskCompleted: 'none',
        source: 'mysql db'
    }

    // check if cache exist 
    var cacheData = await client.get(req.user.id + `:report2`)

    if(!cacheData){

        // Total tasks
        let dailyTaskCounts = await Task.findAll({
            attributes: [[sequelize.fn('count','id'),'dailytasks']],
            where: {
                userId: req.user.id,
                status: true
            },
            group: [['completedAt']]
        }).catch(e => console.log(e))

        let total = 0
        let avg = 0
        if(dailyTaskCounts.length){

            for(let val of dailyTaskCounts){
                total = Number(val.dataValues.dailytasks) + Number(total)
            }
            avg = (total/dailyTaskCounts.length).toFixed(2)
        }
        data.averageDailyTaskCompleted = avg
        client.set(req.user.id + `:report2`, JSON.stringify(data), 'EX', process.env.REDIS_EXPIRE)

    }else{
        data = {  ...JSON.parse(cacheData), source: 'redis cache'}
    }

    return res.send({ data, status: 'success'})
}
export async function overDueTasks(req,res) {

    var data = {
        overDueTasks: 'none',
        source: 'mysql db'
    }


    // check if cache exist 
    var cacheData = await client.get(req.user.id + `:report3`)

    if(!cacheData)
    {
        // Total tasks
        let overDueTasks = await Task.count({
            where: {
                userId: req.user.id,
                status: true,
                completedAt: {
                    [Op.gt]: sequelize.col('dueDate')
                }
            }
        }).catch(console.log)

        data = {  ...data, overDueTasks}

        client.set(req.user.id + `:report3`, JSON.stringify(data), 'EX', process.env.REDIS_EXPIRE)

    } else {
        data = {  ...JSON.parse(cacheData), source: 'redis cache'}
    }

    return res.send({ data, status: 'success'})
}
export async function maxTasksCompletionDay(req,res) {


    var data = {
        source: 'mysql db'
    }


    // check if cache exist 
    var cacheData = await client.get(req.user.id + `:report4`)
    if(!cacheData)
    {
        let dailyTaskCounts = await Task.findAll({
            attributes: [[sequelize.fn('count','id'),'taskCompleted'], 'completedAt'],
            where: {
                userId: req.user.id,
                completedAt: {
                    [Op.ne]: null
                }
            },
            group: [['completedAt']]
        }).catch(e => console.log(e))

        let maximumTasks = {taskCompleted:0,completedAt:null}
        for(let task of dailyTaskCounts) {
            if(task.dataValues.taskCompleted > maximumTasks.taskCompleted){
                maximumTasks = { 
                    taskCompleted: task.dataValues.taskCompleted,
                    completedAt: task.completedAt,
                }
            }
        }

        let day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        maximumTasks.dayName = day[new Date(maximumTasks.completedAt).getDay()]

        data = { ...data, ...maximumTasks }        
        client.set(req.user.id + `:report4`, JSON.stringify(data), 'EX', process.env.REDIS_EXPIRE)

    } else {
        data = {  ...JSON.parse(cacheData), source: 'redis cache'}
    }
    
    return res.send({ 
        data, 
        status: 'success'
    })
}
export async function tasksOpenInDayOfWeek(req,res) {

    var data = {
        source: 'mysql db'
    }

    // check if cache exist 
    var cacheData = await client.get(req.user.id + `:report5`)
    if(!cacheData)
    {
        let sql = "SELECT DAYNAME(`startDate`) as `day`, count(*) AS `tasksopened` FROM `Tasks` AS `Task` WHERE `Task`.`userId` = " + req.user.id + " GROUP BY DAYNAME(`startDate`)"
        let allTasks = await sequelize.query(sql, null, {raw: true})

        data = { ...allTasks[0], ...data}        
        client.set(req.user.id + `:report5`, JSON.stringify(data), 'EX', process.env.REDIS_EXPIRE)

    } else {
        data = {  ...JSON.parse(cacheData), source: 'redis cache'}
    }
    
    return res.send({ data, status: 'success'})
}
