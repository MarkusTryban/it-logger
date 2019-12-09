const express = require('express');

const router = express.Router();
const Tech = require('../models/Tech');

router.get('/', async (req, res) => {
  try {
    const techs = await Tech.find();
    res.json(techs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
