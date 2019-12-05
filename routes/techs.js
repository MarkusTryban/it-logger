const express = require('express');

const router = express.Router();
const config = require('config');

const Tech = require('../models/tech');

router.post('/', (req, res) => {
  res.send('Add a tech');
});

module.exports = router;
