const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
// const morgan = require('morgan'); // don't think we need this

require('./config/passport')(passport); 

const {mongoose} = require('./db/mongoose');
const {Goal} = require('./models/goal');

const app = express();

app.set('view engine', "ejs");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(morgan('dev')); // don't think we need
app.use(cookieParser());

app.use(session({ 
  secret: 'allacheezementsareacheezable',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.get('/', (req, res) => {
  res.redirect('acheezements/new')
});

app.get('/acheezements/new', (req, res) => {
  res.render('new.ejs')
});

app.get('/acheezements', (req, res) => {
  Goal.find({ "createdAt": {
    $lt: new Date(),
    $gte: new Date(new Date().setDate(new Date().getDate()-1))}
   }, function(err, allGoals) {
    err ? console.log(err) : res.render("index", { goals: allGoals });
  })
});

app.post('/acheezements', (req, res) => {
  Goal.create({
    text: req.body.goal
  }, function(err, goal, next) {
    err ? console.log(err) : console.log(goal);
  });
  req.body.cheeze ? res.redirect('/acheezements') : res.redirect('/')
})

app.post('/update', (req, res) => {
  Goal.findById({_id: req.body.id}, function (err, goal) {
    if (err) return console.log(err);

    goal.completed = true;
    goal.save(function (err, updatedGoal) {
      if (err) return console.log(err);
      res.redirect('/acheezements');
    });
  });
});

app.get('/login', (req, res) => {
  res.render('login.ejs', { message: req.flash('loginMessage') });
});

app.post('/login', passport.authenticate('local-login', {
  successRedirect : '/profile',
  failureRedirect : '/login',
  failureFlash : true
}));

app.get('/signup', (req, res) => {
  res.render('signup.ejs', { message: req.flash('signupMessage') });
});

app.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/profile',
  failureRedirect : '/signup',
  failureFlash : true
}));

app.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile.ejs', {
    user : req.user
  });
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
;}

app.listen(3000, () => {
  console.log("Started on port 3000")
});

module.exports = {app};
