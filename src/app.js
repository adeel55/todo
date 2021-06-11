const express = require("express")
const fs = require("fs")
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
var hbs = require('hbs')
const webRouter = require('./routes/web')



// init app
const app = express()
// middleware




// template engine
// app.set('view engine', 'hbs');
// app.set('views', __dirname);
// hbs.registerPartials(__dirname + '/views/partials', (err) => err ? console.log(err):null );
// app.get('/', (req,res) => {
//     return res.render('./views/index',{names:['Adeel','Hamza','Fiaz','Subtain']})
// })


// body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use((req,res,next) => {

    let ip = req.ip == "::1" ? "localhost": req.ip

    let logData = "Url: " + req.originalUrl + "\n"
    logData += "IP: " + ip + "\n"
    logData += "Response Status Code: " + res.statusCode + "\n"
    logData += "Request Body: " + req.body + "\n"
    logData += "Response Body: " + res.outputData + "\n"
    logData += "At: " + new Date() + "\n\n\n"
    
    
    console.log(req.originalUrl)
    console.log(req.ip)
    // console.log(req.headers('user-agent'))
    console.log(req.body)
    console.log(res.statusCode)
    console.log(res.outputData)

    let today = new Date().toISOString().split('T')[0]
    let filename =  './src/logs/'+today+'.txt'
    console.log()
    console.log(new Date())

    fs.appendFile(filename, logData, function (err) {
        if (err) throw err;
    });
    
    next()
})


// helmet
app.use(helmet())
// cors
app.use(cors({ origin: true, credentials: true }))

// define apis router
app.use('/api',webRouter)



// export app module
module.exports = app