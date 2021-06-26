const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
var hbs = require('hbs')
const passport = require('passport')
const logRequest = require('./controllers/log-request')
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')

/************* sessions **********/
const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store)
const { sequelize } = require('../models')
const sequelizeSessionStore = new SessionStore({
    db: sequelize,
});
/************* sessions **********/


// init app
const app = express()


// template engine
app.set('view engine', 'hbs');
app.set('views', __dirname);
hbs.registerPartials(__dirname + '/views/partials', (err) => err ? console.log(err):null );




app.get('/', (req,res) => {
    return res.render('./views/index')
})




// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// sessions store
app.use(expressSession({
    key: 'user_sid',
    secret: process.env.SESSION_SECRET,
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 ,
        expires: 1000 * 60 * 30 ,
        httpOnly: false,
        secure: process.env.NODE_ENV === "production"
    }
}));

// log all requests into files
app.use(logRequest.make)
// helmet
app.use(helmet())
// cors
app.use(cors({ origin: true, credentials: true }))
// passport authentication
app.use(passport.initialize())

// define api and web router
app.use('/api', apiRouter)
app.use(webRouter)

app.get('/redis-set', (req,res) => {
    client.hset('user3',{'data3': req.body.data ,'key3':req.body.data})
    // client.flushall()
    return res.send({status: req.body.data})
})

app.get('/redis-data', async (req,res) => {
    var data = "none"
    data = await client.hgetall('user3',(err,data)=>{
        return res.send({data})
    })
})

// export app module
module.exports = app