const Goal = require('./../models/goal.js');
const {Suggestion} = require('./../models/suggestion');
const express = require('express');
const router = express.Router();
const passport = require('passport');

require('./../config/passport')(passport);

router.get('/', isLoggedIn, (req, res) => {
  res.redirect('/acheezements/new')
});

router.get('/acheezements', isLoggedIn, (req, res) => {
  Goal.find({ $and: [{creator: req.user._id}, {"createdAt": {
    $lt: new Date(),
    $gte: new Date(new Date().setDate(new Date().getDate()-1))}}]
  }, function(err, allGoals) {
    err ? console.log(err) : res.render("goals/index", { goals: allGoals });
  });
});

router.get('/acheezements/new', isLoggedIn, (req, res) => {
  Suggestion.count().exec(function (err, count) {
  let random = Math.floor(Math.random() * count)
  Suggestion.findOne().skip(random).exec(
    function (err, suggestion) {
      console.log(suggestion);
      res.render('goals/new', { suggestion: suggestion.text })
    });
  });
});

router.post('/acheezements', isLoggedIn, (req, res) => {
  Goal.create({
    text: req.body.goal,
    creator: req.user
  }, function(err, goal, next) {
    err ? console.log(err) : console.log(goal);
  });
  req.body.cheeze ? res.redirect('/acheezements') : res.redirect ('/acheezements/new')
})

router.get('/acheezements/show', isLoggedIn, (req, res) => {
  Goal.find({ $and: [{creator: req.user._id}, {"createdAt": {
    $lt: new Date(),
    $gte: new Date(new Date().setDate(new Date().getDate()-7))}}]
  }, function(err, goalHistory) {
    err ? console.log(err) : res.render("goals/show", { goals: goalHistory });
  })
})

router.post('/show', isLoggedIn, (req, res) => {
  res.redirect('/acheezements/show');
});

router.get('/acheezements/:id/edit', isLoggedIn, (req, res) => {
  Goal.findById({_id: req.params.id
  }, function (err, goal) {
      if (err) return console.log(err);
    res.render('goals/edit', {goal: goal})
  });
});

router.post('/acheezements/:id', isLoggedIn, (req, res) => {
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

router.post('/update', isLoggedIn, (req, res) => {
  Goal.findById({_id: req.body.id}, function (err, goal) {
    if (err) return console.log(err);
    goal.completed = !goal.completed;
    goal.save(function (err, updatedGoal) {
      if (err) return console.log(err);
      res.redirect('/acheezements');
    });
  });
});

router.post('/suggestion', isLoggedIn, (req, res) => {
  console.log(req.body);
  Goal.create({
    text: req.body.suggestion
  }, function(err, goal, next) {
    err ? console.log(err) : console.log(goal);
  });
  res.redirect('/acheezements/new');
})

router.post('/show', isLoggedIn, (req, res) => {
  console.log("hello")
  res.redirect('/acheezements/show');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
;}

module.exports = router;