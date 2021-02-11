const { Router } = require('express');
const shortUrl = require('./shorturl');
const getShortenUrlRoute = require('./getShortenurl');

const routes = Router();

routes.use("/", getShortenUrlRoute)
routes.use("/shorturl", shortUrl);

module.exports = routes;