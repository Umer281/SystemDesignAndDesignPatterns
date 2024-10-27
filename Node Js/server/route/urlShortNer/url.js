import express from 'express';
import  {generateShortUrl,redirctToUrl}  from '../../controllers/urlShortner/urlShortner.controller.js';



const UrlRouter = express.Router();



UrlRouter.post('/generateUrl',  generateShortUrl);
UrlRouter.get('/:id', redirctToUrl);


export default UrlRouter;