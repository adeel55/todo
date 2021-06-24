const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const path = require('path')
const router = new express.Router()
const multer = require('multer')

// multer filer upload storage
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})

// middlewares

const { auth, authUnverified } = require('../middlewares/auth')
const { filters } = require('../middlewares/filters')
const userController = require('../controllers/user-controller')


// Oauth 2.0  Passport

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'email']
  },
  userController.facebookPassport
));
passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    userController.googlePassport
))

router.get('/auth/google',  passport.authenticate('google', { scope: ['profile','email'] }))
router.get('/auth/facebook',  passport.authenticate('facebook', {scope:'email'}))
router.get('/auth/google/callback', passport.authenticate('google'), userController.googleCallback);
router.get('/auth/facebook/callback', passport.authenticate('facebook', { scope: 'email'}), userController.facebookCallback)


// login routes

router.get('/login', (req,res) => {return res.render('./views/login')})
router.get('/login-success', (req,res) => res.render('./views/login-success'))
router.get('/login-password', (req,res) => res.render('./views/login-password'))

module.exports = router