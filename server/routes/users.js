const Goal = require('./../models/goal.js');
const User = require('./../models/user.js');
const {Suggestion} = require('./../models/suggestion');
const express = require('express');
const router = express.Router();
const passport = require('passport');

require('./../config/passport')(passport);

router.get('/login', (req, res) => {
  res.render('users/login', { message: req.flash('loginMessage') });
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/acheezements/new',
  failureRedirect : '/login',
  failureFlash : true
}));

router.get('/signup', (req, res) => {
  res.render('users/signup', { message: req.flash('signupMessage') });
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/acheezements/new',
  failureRedirect : '/signup',
  failureFlash : true
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;