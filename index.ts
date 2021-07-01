import app from "./src/app"
import schedule from "node-schedule"
import sendReminderEmail from "./src/controllers/scheduled-controller"
const port = process.env.PORT || 3000;

schedule.scheduleJob('0 0 * * *', function(){
    console.log('This cron runs at: '+ new Date());
    sendReminderEmail()
});

app.listen(port, () => console.log("Node server is up on port " + port))
