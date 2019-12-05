const mongoose = require('mongoose');

const LogSchema = mongoose.Schema();

module.exports = mongoose.model('log', LogSchema);
