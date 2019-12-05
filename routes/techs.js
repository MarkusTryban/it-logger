const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  res.send('Add a tech');
});

module.exports = router;
