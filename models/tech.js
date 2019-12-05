const mongoose = require('mongoose');

const TechSchema = mongoose.Schema();

module.exports = mongoose.model('tech', TechSchema);
