const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const path = require('path')
const router = new express.Router()

// middlewares

const { auth } = require('../middlewares/auth')
const userController = require('../controllers/user-controller')
const { passportCallbackOauth2, Oauth2Callback, setPassword, signout } = require('../controllers/user-controller')
// console.log(typeof passportCallbackOauth2)

// return;
// Oauth 2.0  Passport

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
passport.use(new FacebookStrategy(
    {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ['id', 'displayName', 'email']
    },
    passportCallbackOauth2
));
passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    passportCallbackOauth2
))

router.get('/auth/google',  passport.authenticate('google', { scope: ['profile','email'] }))
router.get('/auth/facebook',  passport.authenticate('facebook', {scope:'email'}))
router.get('/auth/google/callback', passport.authenticate('google'), Oauth2Callback);
router.get('/auth/facebook/callback', passport.authenticate('facebook', { scope: 'email'}), Oauth2Callback)


// login routes

router.get('/login', (req,res) => {return res.render('./views/login')})
router.get('/login-oauth', (req,res) => {
    return res.render('./views/login-oauth', {status:req.query.status,message:req.query.message, token:req.session.accessToken})
})
router.get('/login-set-password', (req,res) => res.render('./views/login-password'))
router.post('/set-password', setPassword)
router.post('/signout', signout)

export default router