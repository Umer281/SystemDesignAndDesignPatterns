import  UrlModel  from '../../models/url.js';
import { Messages } from '../../helpers/messages.js';
import { nanoid } from 'nanoid';

export async function generateShortUrl(req, res, next) {
    try {
        if (!req.body.url) {
            res.send({ 'msg': Messages.emptyUrl, 'status': false });
            return;
        }

        const result = await UrlModel.create({
            shortId: nanoid(),
            redirectUrl: req.body.url,
        });
        await UrlModel.updateOne({_id: result._id}, 
            {$push:{visitsHistory: {timestamp: Date.now()}}});

        console.log(result);
       return  res.send({ 'status': true, 'id': result.shortId });
    } catch (error) {
        return error;
    }
}

export async  function redirectToUrl(req,res,next) {
    try {
           console.log(req.params.id,"iddddddd");
        //   return;
          const shortId = req.params.id;
          const result = await UrlModel.findOne({'shortId': shortId});
          console.log(result,"result")
          if(result && result.redirectUrl){
            res.redirect(result.redirectUrl);
          }else{
            return res.status(404).send({ status: false, message: 'Redirect URL not found' });
          }
        //   return;
        //   return res.send({'status': true, 'data': })
    } catch (error) {
          console.log(error);
    }
}


// export default generateShortUrl;