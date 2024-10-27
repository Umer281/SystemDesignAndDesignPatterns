import { generateShortUrl as generateShortUrlService, redirectToUrl as redirectToUrlService } from '../../services/urlShortner/urlShortner.service.js';



export async function generateShortUrl(req, res, next) {
    try {
        const result = await generateShortUrlService(req,res,next);
        console.log(result, "inside controller");
        return res.json(result);
    } catch (error) {
        console.error('Error in generateShortUrl controller:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


export async  function redirctToUrl(req,res,next) {
    try {  
        // console.log(req.params,"pappapa")
          const result = await  redirectToUrlService(req,res,next);
        //   return result;
    } catch (error) {
          console.log(error);
    }
}


// export default generateShortUrl;