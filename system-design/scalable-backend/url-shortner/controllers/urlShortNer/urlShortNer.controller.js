const {generateShortNerUrl, redirectToOriginalUrl} = require('../../services/urlShortNer/urlShortNer.service');




async function generateShortNerUrl(req,res,next) {
   generateShortNerUrl(req, res,next);
};



async function redirectToOriginalUrl(req,res,next){
    const {id} = req.params;
    redirectToOriginalUrl(id);
}


module.exports = {generateShortNerUrl, redirectToOriginalUrl}