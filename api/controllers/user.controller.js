const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');

const userCtrl = {}

userCtrl.signUp = async (req, res) => {
    const fullName = req.body.fullName,
          userName = req.body.userName,
          password = req.body.password,
          confirmPassword = req.body.confirmPassword

    const user = await User.findOne({ userName: userName });

    const confirmations = [],
          errors = []

    if (user) {
        errors.push({text: 'The "userName" is already in use.'});
        console.log(errors);
        res.redirect('/signup');
    } else {
        const userSignedUp = new User({
            fullName: fullName,
            userName: userName,
            password: password,
        })

        if (password !== confirmPassword) {
            errors.push({text: 'Password do not match! Try Again.'});
            console.log(errors);
        } else {
            userSignedUp.password = await userSignedUp.encryptPassword(password);
            await userSignedUp.save();

            confirmations.push({text: 'You are registered!'});
            console.log(confirmations);

            res.redirect('/');
        }
    }
}

userCtrl.signIn = passport.authenticate('local', {
    failureRedirect: '/signin',
    successRedirect: '/',
    failureFlash: true
});

userCtrl.signOut = (req, res) => {
    req.logout();
    res.redirect('/signin');
}

// userCtrl.login = (req, res) => {
//   // Token
//   const token = jwt.sign({ id: req.user.id }, 'jwt_secret')
//   res.json({ token: token })
// }
//
// userCtrl.user = (req, res) => {
//     if ( !req.user ) {
//         res.json({ userName: 'nobody' })
//     }
//     res.json({ userName: req.user.userName })
// }

module.exports = userCtrl;
