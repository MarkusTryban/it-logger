const express = require('express');

const router = express.Router();
const config = require('config');

const Log = require('../models/log');

router.post('/', (req, res) => {
  res.send('Add a log');
});

module.exports = router;
