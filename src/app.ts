import express from "express"
import bodyParser from 'body-parser'
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from 'swagger-jsdoc'
import cors from 'cors'
import helmet from 'helmet'
import hbs from 'hbs'
import passport from 'passport'
import makeLog from './controllers/log-request'
import webRouter from './routes/web'
import apiRouter from './routes/api'

/************* sessions **********/
import expressSession from "express-session"
import SequelizeStore from "connect-session-sequelize"
const expressSessionStore = SequelizeStore(expressSession.Store)
import { sequelize } from "../models"
const sequelizeSessionStore = new expressSessionStore({
    db: sequelize,
});
/************* sessions **********/


// init app
const app = express()

// template engine
app.set('view engine', 'hbs');
app.set('views', __dirname);
hbs.registerPartials(__dirname + '/views/partials');




app.get('/', (req,res) => {
    return res.render('./views/index')
})


/*************** Swagger Docs APIs ********************/

const swagger =  swaggerDocs({
    definition: {
        info: {
            title: "Todo APIs",
            version: '1.0.0',
            description: "todo apis documentation of released version"
        },
        openapi: "3.0.0",
        servers: [{
            url: "http://localhost:3000/"
        }],
    },
    apis: ["./docs.yml"]
})
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger))

/*************** Swagger Docs APIs ********************/

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// sessions store
app.use(expressSession({
    secret: "process.env.SESSION_SECRET",
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //     maxAge: 1000 * 60 * 60 ,
    //     expires: 1000 * 60 * 30 ,
    //     httpOnly: false,
    //     secure: process.env.NODE_ENV === "production"
    // }
}));

// log all requests into files
app.use(makeLog)
// helmet
app.use(helmet())
// cors
app.use(cors({ origin: true, credentials: true }))
// passport authentication
app.use(passport.initialize())

// define api and web router
app.use('/api', apiRouter)
app.use(webRouter)

// export app module
export default app