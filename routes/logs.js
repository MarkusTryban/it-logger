const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const Log = require('../models/Log');

router.get('/', async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  [
    check('message', 'message is required.')
      .not()
      .isEmpty(),
    check('tech', 'tech is required.')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    try {
      const { message, tech, attention } = req.body;

      const log = new Log({
        message,
        tech,
        attention
      });

      await log.save();

      res.json(log);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error.');
    }
  }
);

module.exports = router;
