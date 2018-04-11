require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const {mongoose} = require('./db/mongoose');
const {Suggestion} = require('./models/suggestion');
const Goal = require('./models/goal.js');
const User = require('./models/user.js');
const app = express();
const port = process.env.PORT;

require('./config/passport')(passport);

app.set('view engine', "ejs");
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

app.use(session({
  secret: 'allacheezementsareacheezable',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(require('./routes/routes'));

app.listen(port, () => {
  console.log(`Started on port ${port}`)
});

module.exports = {app};
