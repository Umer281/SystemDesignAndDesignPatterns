const {UrlShortNerModel}  = require('../../model/urlShortner');

async function generateShortNerUrl(req,res,next) {
  try {
     
      if(!req.body.url) return res.status(400).json({error: 'url is required'});
      await UrlShortNerModel.create({
          shortId: '',
          redirectUrl: req.body.url,
          visitHitory: []
      });
      return res.json({id: ''})
       
  } catch (error) {
     return new Error(error)
  }
};



async function redirectToOriginalUrl(id){
     try {
         
     } catch (error) {
         return new Error(error);
     }
}


module.exports = {generateShortNerUrl, redirectToOriginalUrl}