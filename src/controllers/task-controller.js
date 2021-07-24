const { User, Task , Attachment, Sequelize:{ Op }, sequelize } = require('../../models')
const path = require('path')
const fs = require('fs')

export async function test (req,res) {
    let where = { }
    if(req.query.search){
        where = {
            ...where,
            [Op.or]: [
                {
                    title: {
                        [Op.substring]: req.query.search
                    }
                },
                {
                    description: {
                        [Op.substring]: req.query.search
                    }
                }
            ]
        }
    }
    if(req.filter.hasDate)  where['createdAt'] = req.filter.date
    
    let tasks = await Task.findAndCountAll({
        attributes: ['id', 'title', 'description', 'status', 'startDate', 'dueDate', 'updatedAt', 'createdAt'],
        where,
        order: [['createdAt', 'DESC']],
        offset: req.pagination.offset,
        limit: req.pagination.limit,
    }).catch(e => console.log(e))

    return res.send({data: tasks, status: 'success'})
}
export async function index (req,res) {
    let where = { userId: req.user.id }
    if(req.query.search){
        where = {
            ...where,
            [Op.or]: [
                {
                    title: {
                        [Op.substring]: req.query.search
                    }
                },
                {
                    description: {
                        [Op.substring]: req.query.search
                    }
                }
            ]
        }
    }
    if(req.filter.hasDate)  where['createdAt'] = req.filter.date
    
    let tasks = await Task.findAndCountAll({
        attributes: ['id', 'title', 'description', 'status', 'startDate', 'dueDate', 'updatedAt', 'createdAt'],
        where,
        order: [['createdAt', 'DESC']],
        offset: req.pagination.offset,
        limit: req.pagination.limit,
    }).catch(e => console.log(e))

    return res.send({data: tasks, status: 'success'})
}
export async function create (req,res) {

    // get count of task for individual user
    let count = await Task.count({
        where: {
            userId: req.user.id
        }
    }).catch(console.log)

    // only twenty tasks are allowed
    if(count >= 50){
        return res.status(400).send({status: 'error', message: "sorry max limit reached. you can only create maximum 50 tasks for a list"})
    }


    const {title,description,startDate,dueDate} = req.body
    // create task for user
    let task = await Task.create({
        userId: req.user.id,
        title,
        description,
        startDate,
        dueDate,
    }).catch(e => console.log(e))

    req.user.clearCacheReports()

    return res.status(201).send({ task , message: `Task created successfully.`, status: 'success'})
}
export async function view (req,res) {
    let task = await Task.findOne({
        attributes: ['id', 'title', 'description', 'startDate', 'dueDate', 'updatedAt', 'createdAt'],
        where: {
            id: req.params.id,
        }
    }).catch(e => console.log(e))
    return res.send({ data: {task}, status: 'success'})
}
export async function edit (req,res) {

    let task = await Task.findOne({
        attributes: ['id', 'title', 'description', 'startDate', 'dueDate', 'updatedAt', 'createdAt'],
        where: {
            id: req.params.id,
        }
    }).catch(e => console.log(e))
    return res.send({ data: {task}, status: 'success'})
    
}
export async function update (req,res) {

    // check if task exist
    let exist = await Task.findOne({
        where: {
            id: req.params.id
        },
        include: [User,Attachment]
    }).catch(e => console.log(e))

    if(exist.User.id === req.user.id){

        const isUpdated = await Task.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            startDate: req.body.startDate,
            dueDate: req.body.dueDate,
        },
        {  where: {id:req.params.id} })
        .catch(e => console.log(e))
    
        if(Number(isUpdated)){
            req.user.clearCacheReports()
            return res.send({ message: `Task info updated successfully.`, status: 'success'})
        }else{
            return res.status(400).send({ message: `Task info failed to update.`, status: 'error'})
        }
    }else{
        return res.status(401).send({ message: `You are not authorize to update this task.`, status: 'unauthorized'})
    }

}
export async function destroy (req,res) {

    // check if task exist
    let exist = await Task.findOne({
        where: {
            id: req.params.id
        },
        include: [User,Attachment]
    }).catch(e => console.log(e))

    if(!exist){
        return res.status(400).send({ message: 'task not found!', status: 'error'})
    }
    if(exist.User.id != req.user.id){
        return res.status(401).send({ message: 'User not has rights to delete this task.', status: 'unauthorized'})
    }

    for (file of exist.Attachments){
        if(fs.existsSync('uploads/' + file.name)){
            fs.unlinkSync('uploads/' + file.name)
        }
    }
    await Task.destroy({where:{id:req.params.id}}).catch(e => console.log(e))
    return res.send({ message: 'Task deleted!', status: 'success'})
}

export async function attachments (req,res) {
    // console.log(req.body.taskId);
    if(!req.file)
        return res.status(400).send({ status: "error", message: "attachment file is required" })

    await Attachment.create({
        taskId: req.body.taskId,
        name: req.file.filename
    }).catch(e => {
        console.log(e)
    })

    return res.send({ status:"success" , message: "file uploaded successfully" })
}

export async function similarTasks (req, res) {

    let tasks = await Task.findAll({
        attributes: [[sequelize.fn('count','id'), 'taskCount'], 'title'],
        where: {
            userId: req.user.id,
        },
        group: ['title','description'],
        having: {
            taskCount: {
                [Op.gt]: 1
            }
        }
        
    }).catch(e => {
        console.log(e)
    })

    return res.send({ tasks , status:"success" })
}

export async function sessions (req, res) {

    req.session.data = {
        pair: req.body.saveIt
    }
    return res.send({ status: "sessions saved" , session: req.session.data})

}

export async function sessionsGet (req,res) {

    res.send({
        data: req.session
    })

}
