const express = require('express');
const passport = require('passport');

const router = express.Router();

const User = require('../models/User');

const { signUp, login, user } = require('../controllers/user.controller')

const { isAuthenticated } = require('../helpers/auth');

/* API entrypoints */
// Singup
router.post('/signup', signUp)

router.post('/about', isAuthenticated);

// // Login
// router.post('/signin', passport.authenticate('local', { session: false }), login)
//
// // Return user data
// router.get('/user', passport.authenticate('local', { session: false }), user)

module.exports = router
