const express = require('express');
const router = express.Router();

router.use(require('./users'));
router.use(require('./goals'));

module.exports = router
