const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
var hbs = require('hbs')
const logRequest = require('./controllers/log-request')
const webRouter = require('./routes/web')

// init app
const app = express()


// template engine
// app.set('view engine', 'hbs');
// app.set('views', __dirname);
// hbs.registerPartials(__dirname + '/views/partials', (err) => err ? console.log(err):null );
// app.get('/', (req,res) => {
//     return res.render('./views/index',{names:['Adeel','Hamza','Fiaz','Subtain']})
// })


// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// log all requests into files
app.use(logRequest.make)
// helmet
app.use(helmet())
// cors
app.use(cors({ origin: true, credentials: true }))
// define apis router
app.use('/api', webRouter)



// export app module
module.exports = app