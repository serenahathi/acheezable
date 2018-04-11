const Goal = require('./../models/goal.js');
const User = require('./../models/user.js');
const {Suggestion} = require('./../models/suggestion');
const express = require('express');
const router = express.Router();

router.use(require('./users'));
router.use(require('./goals'));

module.exports = router
