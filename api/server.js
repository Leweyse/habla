const express = require('express');
const cors = require('cors');

const app = express();
const passport = require('./config/passport');

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./routes/user.routes'));

module.exports = app;
