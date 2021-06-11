const { Task , Attachment,Sequelize,Sequelize:{ Op } } = require('../../models')
const path = require('path')

index = async (req,res) => {
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
        attributes: ['id', 'title', 'description', 'startDate', 'dueDate', 'updatedAt', 'createdAt'],
        where,
        order: [['createdAt', 'DESC']],
        offset: req.pagination.offset,
        limit: req.pagination.limit,
    }).catch(e => console.log(e))

    return res.send({data: tasks, status: 'success'})
}
view = async (req,res) => {
    let task = await Task.findOne({
        attributes: ['id', 'title', 'description', 'startDate', 'dueDate', 'updatedAt', 'createdAt'],
        where: {
            id: req.params.id,
        }
    }).catch(e => console.log(e))
    return res.send({ data: {task}, status: 'success'})
}
edit = async (req,res) => {
    let task = await Task.findOne({
        attributes: ['id', 'title', 'description', 'startDate', 'dueDate', 'updatedAt', 'createdAt'],
        where: {
            id: req.params.id,
        }
    }).catch(e => console.log(e))
    return res.send({ data: {task}, status: 'success'})
}
create = async (req,res) => {

    // get count of task for individual user
    let count = await Task.count({
        where: {
            userId: req.user.id
        }
    }).catch(e => console.log(e))

    // only twenty tasks are allowed
    if(count >= 50){
        return res.status(400).send({status: 'error', message: "sorry max limit reached. you can only create maximum 50 tasks for a list"})
    }

    // create task for user
    await Task.create({
        userId: req.user.id,
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
    }).catch(e => console.log(e))

    return res.send({ message: `Task created successfully.`, status: 'success'})
}
update = async (req,res) => {
    await Task.update({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
    },
    {  where: {id:req.params.id} })
    .catch(e => console.log(e))

    return res.send({ message: `Task info updated successfully.`, status: 'success'})
}
destroy = async (req,res) => {
    await Task.destroy({where:{id:req.params.id}}).catch(e => console.log(e))


    const attachments = await Attachment.findAll({ where:{
        taskId: req.params.id
    }}).catch(e => console.log(e))

    for (file in attachments){
        fs.unlink('./uploads/' + file)
    }
    await Attachment.destroy({ where: { taskId: req.params.id }}).catch(e => console.log(e))
    return res.send({ message: 'Task deleted!', status: 'success'})
}



attachments = async (req, res) => {

    console.log(req.file)
    await Attachment.create({
        taskId: req.body.taskId,
        name: req.file.filename
    }).catch(e => conssole.log(e))

    return res.send({data: "file uploaded successfully"})
}

module.exports = {
    index,
    create,
    view,
    edit,
    update,
    destroy,
    attachments
}