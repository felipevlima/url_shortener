const express = require("express");
const GetShortenUrl = require("../controllers/getShortenurl.controller");

const getShortenUrlRoute = express.Router();

getShortenUrlRoute.get('/:shortUrl', GetShortenUrl.index)

module.exports = getShortenUrlRoute;