const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password'
}, async (userName, password, done) => {

    // Match Email's user
    const user = await User.findOne({userName})
    if (!user) {
        return done(null, false, { message: 'Not user found!'});
    } else {
        //Match Password's User
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, {message: 'Incorrect Password!'})
        }
    }
}));

// Save Session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Save Session: Navigation
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

module.exports = passport;
