const express = require('express');
const { check } = require('express-validator');

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

router.post(
  '/',
  [
    check('firstName', 'First Name is required.')
      .not()
      .isEmpty(),
    check('lastName', 'Last Name is required.')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    try {
      const { firstName, lastName } = req.body;

      const tech = new Tech({
        firstName,
        lastName
      });

      await tech.save();

      res.json(tech);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error.');
    }
  }
);

router.delete('/:id', async (req, res) => {
  try {
    let tech = await Tech.findById(req.params.id);

    if (!tech) return res.status(404).json({ msg: 'tech not found.' });

    tech = await Tech.findByIdAndRemove(req.params.id);

    res.send('tech Removed.');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
});

module.exports = router;
