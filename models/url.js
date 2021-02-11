const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: String,
  originalUrl: String,
  shortUrl: String,
});

module.exports = mongoose.model('url', urlSchema);