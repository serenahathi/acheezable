require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
// const morgan = require('morgan'); // don't think we need this

require('./config/passport')(passport);

const {mongoose} = require('./db/mongoose');
// const {Goal} = require('./models/goal');

let Goal = require('./models/goal.js')
let User = require('./models/user.js')

const app = express();
const port = process.env.PORT;

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

app.get('/', isLoggedIn, (req, res) => {
  res.redirect('/acheezements/new')
});

app.get('/acheezements/new', isLoggedIn, (req, res) => {
  res.render('goals/new')
});

app.get('/acheezements', isLoggedIn, (req, res) => {
  Goal.find({ $and: [{creator: req.user._id}, {"createdAt": {
    $lt: new Date(),
    $gte: new Date(new Date().setDate(new Date().getDate()-1))}}]
  }, function(err, allGoals) {
    err ? console.log(err) : res.render("goals/index", { goals: allGoals });
  });
});


app.get('/acheezements/:id/edit', isLoggedIn, (req, res) => {
  Goal.findById({_id: req.params.id}, function (err, goal) {
    if (err) return console.log(err);

    res.render('goals/edit', {goal: goal})
  });
});

app.post('/acheezements/:id', isLoggedIn, (req, res) => {
  Goal.findById({_id: req.params.id}, function (err, goal) {
    if (err) return console.log(err);
    goal.text = req.body.goal;
    goal.save(function (err, goal) {
      if (err) return console.log(err);
      res.redirect('/acheezements');
    })
  });
});

app.get('/acheezements/show', (req, res) => {
  Goal.find({"createdAt": {
    $lt: new Date(),
    $gte: new Date(new Date().setDate(new Date().getDate()-7))}
  }, function(err, goalHistory) {
    console.log(goalHistory)
    err ? consoler.log(err) : res.render("goals/show", { goals: goalHistory });
  })
})

app.post('/acheezements', isLoggedIn, (req, res) => {
  Goal.create({
    text: req.body.goal,
    creator: req.user
  }, function(err, goal, next) {
    err ? console.log(err) : console.log(goal);
  });
  req.body.cheeze ? res.redirect('/acheezements') : res.redirect ('/acheezements/new')
})

app.post('/update', isLoggedIn, (req, res) => {
  Goal.findById({_id: req.body.id}, function (err, goal) {
    if (err) return console.log(err);
    console.log(goal.completed);
    goal.completed = !goal.completed;
    console.log(goal.completed);
    goal.save(function (err, updatedGoal) {
      if (err) return console.log(err);
      res.redirect('/acheezements');
    });
  });
});

app.post('/show', (req, res) => {
  console.log("hello")
  res.redirect('/acheezements/show');
});

app.get('/login', (req, res) => {
  res.render('users/login', { message: req.flash('loginMessage') });
});

app.post('/login', passport.authenticate('local-login', {
  successRedirect : '/acheezements/new',
  failureRedirect : '/login',
  failureFlash : true
}));

app.get('/signup', (req, res) => {
  res.render('users/signup', { message: req.flash('signupMessage') });
});

app.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/acheezements/new',
  failureRedirect : '/signup',
  failureFlash : true
}));

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
;}

app.listen(port, () => {
  console.log(`Started on port ${port}`)
});

module.exports = {app};
