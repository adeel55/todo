const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
var hbs = require('hbs')
const logRequest = require('./controllers/log-request')
const webRouter = require('./routes/web')
const passport = require('passport')
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
const { Strategy, ExtractJwt } = require('passport-jwt')

// sessions

// const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store)
const { sequelize } = require('../models')

const sequelizeSessionStore = new SessionStore({
    db: sequelize,
});

// sessions //



const { User } = require('../models')
// init app
const app = express()


// template engine
app.set('view engine', 'hbs');
app.set('views', __dirname);
hbs.registerPartials(__dirname + '/views/partials', (err) => err ? console.log(err):null );




app.get('/', (req,res) => {
    return res.render('./views/index')
})
app.get('/login', (req,res) => {
    return res.render('./views/login')
})
app.get('/login-success', (req,res) => {
    return res.render('./views/login-success')
})
app.get('/login-password', (req,res) => {
    return res.render('./views/login-password')
})

// passport.use(new GoogleStrategy({
//     clientID        : process.env.GOOGLE_CLIENT_ID,
//     clientSecret    : process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL     : 'http://localhost:3000/',
// }, 
// passport.serializeUser(function(user, done){
//     done(null, user.id);
// })))

// app.get('/editor', function(req, res) {
//     return res.render('./views/index')
// })

// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
//   }));

//   app.get('/auth/google/callback', passport.authenticate('google', {
//     successRedirect: '/editor',
//     failureRedirect: '/'
// }));







// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// sessions store

// app.use(cookieParser(process.env.SESSION_SECRET));
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
// define apis router
app.use('/api', webRouter)



// Passport


app.use(passport.initialize())

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
done(null, user);
});

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    User.create({
        fullName: profile._json.name,
        email: profile._json.email,
        emailVerifiedAt: new Date(),
        token: accessToken,
    }).catch(err => console.log(err))
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });

    let user = {
        // displayName: profile.displayName,
        // name: profile._json.name,
        // email: profile._json.email,
        // provider: profile.provider 
    }
    
    // console.log("accessToken")
    // console.log(accessToken)
    // console.log("refreshToken")
    // console.log(refreshToken)
    // console.log("profile")
    // console.log(profile)
    return cb(null,profile);
  }
));

app.get('/auth/facebook',  passport.authenticate('facebook', {scope:'email'}))


app.get('/auth/facebook/callback', passport.authenticate('facebook', {scope: 'email'}),(req, res)=>{

    console.log(req.session)
    return res.render('./views/login-success')
})






// export app module
module.exports = app