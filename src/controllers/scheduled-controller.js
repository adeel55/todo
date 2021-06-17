const { User , Task,  sequelize, Sequelize:{ Op } } = require('../../models')
const notification = require("./notification-controller")



sendReminderEmail = async () => {
    // get all users having any task deeadline today
    let users = await User.findAll({
        attributes: ['fullName','email'],
        where: {
            emailVerifiedAt: {
                [Op.ne]: null
            }
        },
        include: {
            model: Task,
            attributes: ['title','description'],
            where: sequelize.where(sequelize.fn('date', sequelize.col('dueDate')), '=', new Date().toISOString().split('T')[0]),
        }
    }).catch(e => console.log(e))


    // loop each user to send him email notification
    for(user of users){

        let tasks = []
        for(task of user.Tasks){
            tasks.push({
                title: task.title,
                description: task.description
            })
        }
        // send email notification everyday if any task is due today
        if(tasks.length){
            let res = await notification.email(user.email,'Remided about dealine tasks','reminder-deadline-task',{tasks, today: new Date().toISOString().split('T')[0]})
            console.log(res.response)
        }
    }
}

module.exports = {
    sendReminderEmail
}