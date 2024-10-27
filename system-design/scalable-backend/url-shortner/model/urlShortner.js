const {mongoose} = require('moongoose');


const urlSchema = new moongoose.Schema({


    shortId:{
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHitory: [{timestamp:{type: Number}}]
}, 
{timestamp: true}

);
const UrlShortNerModel = moongoose.model('urlShortNer', urlSchema);

module.export = UrlShortNerModel;