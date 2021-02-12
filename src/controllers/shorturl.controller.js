const shortid = require("shortid");
const validUrl = require("valid-url");
const Url = require("../models/url");

class ShortUrl {
  async store(req, res) {
    const originalUrl = req.body.originalUrl;
    const baseUrl = process.env.BASE_URL;
  
    if(!validUrl.isUri(baseUrl)){
      return res.status(401).json("Internal error. Please come back later.");
    }
  
    const urlCode = shortid.generate();
  
    if(validUrl.isUri(originalUrl)){
      try{
        const url = await Url.findOne({ originalUrl : originalUrl });
        
        if(url){
          return res.status(200).json(url);
        } 
  
        const shortUrl = `${baseUrl}/${urlCode}`;
  
        const newUrl = new Url({
          originalUrl,
          shortUrl,
          urlCode,
        });
  
        await newUrl.save()
        return res.status(201).json(newUrl);
        
      }catch(err){
        console.error(err.message);
        return res.status(500).json(`Internal Server error ${err.message}`);
      }
    }else{
      return res.status(400).json("Invalid URL. Please enter a vlaid url for shortening.");
    } 
  }
}

module.exports = new ShortUrl();
