const express = require("express");
const shortUrl = require('../controllers/shorturl.controller')

const shortUrlRoute = express.Router();

shortUrlRoute.post("/", shortUrl.store);

module.exports = shortUrlRoute;