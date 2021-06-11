const app = require('./src/app')
const schedule = require('node-schedule')
const scheduleController = require('./src/controllers/scheduled-controller')
const port = process.env.PORT || 3000;


var jobs = schedule.scheduleJob('0 0 * * *', function(){
    console.log('This cron runs at: '+ new Date());
    scheduleController.sendReminderEmail()
  });

app.listen(port, () => console.log("Node server is up on port " + port))
