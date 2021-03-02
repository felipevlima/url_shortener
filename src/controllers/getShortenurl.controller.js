const Url = require('../models/url');

class GetShortenerUrl {
  async index(req, res) {
    const shortUrlCode = req.params.shortUrl;
    const url = await Url.findOne({ urlCode: shortUrlCode });
    
    try {
      if (url) {
        return res.status(302).redirect(url.originalUrl);
      } else {
        return res.status(400).json("The short url doesn't exists in our system.");
      }
    } catch (err) {
      console.error(`Error while retrieving long url for shorturlcode ${shortUrlCode}`);
      return res.status(500).json("There is some internal error.");
    }
  }
}

module.exports = new GetShortenerUrl();
