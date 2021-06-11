const bcrypt = require('bcryptjs')
const { User , Sequelize,Sequelize:{ Op } } = require('../../models')
const { tasksOpenInDayOfWeek } = require('./report-controller')

sendReminderEmail = async () => {
    // send email

    let dueTasks = await Task.findAll({
        where:{
            dueDate: {
                [Op.eq]: new Date()
            }
        }
    }).catch(e => console.log(e))
    console.log('Reminder Email sent... At:')
   
}

module.exports = {
    sendReminderEmail
}