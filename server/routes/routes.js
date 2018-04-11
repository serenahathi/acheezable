const Goal = require('./../models/goal.js');
const User = require('./../models/user.js');
const {Suggestion} = require('./../models/suggestion');

module.exports = function(app, passport) {
  app.get('/', isLoggedIn, (req, res) => {
    res.redirect('/acheezements/new')
  });

  app.get('/acheezements', isLoggedIn, (req, res) => {
    Goal.find({ $and: [{creator: req.user._id}, {"createdAt": {
      $lt: new Date(),
      $gte: new Date(new Date().setDate(new Date().getDate()-1))}}]
    }, function(err, allGoals) {
      err ? console.log(err) : res.render("goals/index", { goals: allGoals });
    });
  });

  app.get('/acheezements/new', isLoggedIn, (req, res) => {
    Suggestion.count().exec(function (err, count) {
    let random = Math.floor(Math.random() * count)
    Suggestion.findOne().skip(random).exec(
      function (err, suggestion) {
        console.log(suggestion);
        res.render('goals/new', { suggestion: suggestion })
      });
    });
  });

  app.post('/acheezements', isLoggedIn, (req, res) => {
    Goal.create({
      text: req.body.goal,
      creator: req.user
    }, function(err, goal, next) {
      err ? console.log(err) : console.log(goal);
    });
    req.body.cheeze ? res.redirect('/acheezements') : res.redirect ('/acheezements/new')
  })

  app.get('/acheezements/show', isLoggedIn, (req, res) => {
    Goal.find({ $and: [{creator: req.user._id}, {"createdAt": {
      $lt: new Date(),
      $gte: new Date(new Date().setDate(new Date().getDate()-7))}}]
    }, function(err, goalHistory) {
      err ? console.log(err) : res.render("goals/show", { goals: goalHistory });
    })
  })

  app.post('/show', (req, res) => {
    res.redirect('/acheezements/show');
  });

  app.get('/acheezements/:id/edit', isLoggedIn, (req, res) => {
    Goal.findById({_id: req.params.id
    }, function (err, goal) {
        if (err) return console.log(err);
      res.render('goals/edit', {goal: goal})
    });
  });

  app.post('/acheezements/:id', isLoggedIn, (req, res) => {
    Goal.findById({_id: req.params.id
    }, function (err, goal) {
      if (err) return console.log(err);
      goal.text = req.body.goal;
      console.log(req.body.goal)
      goal.save(function (err, goal) {
        if (err) return console.log(err);
        res.redirect('/acheezements');
      })
    });
  });

  app.post('/update', isLoggedIn, (req, res) => {
    Goal.findById({_id: req.body.id}, function (err, goal) {
      if (err) return console.log(err);
      goal.completed = !goal.completed;
      goal.save(function (err, updatedGoal) {
        if (err) return console.log(err);
        res.redirect('/acheezements');
      });
    });
  });

  app.post('/suggestion', isLoggedIn, (req, res) => {
    console.log(req.body);
    Goal.create({
      text: req.body.suggestion
    }, function(err, goal, next) {
      err ? console.log(err) : console.log(goal);
    });
    res.redirect('/acheezements/new');
  })

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
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
;}