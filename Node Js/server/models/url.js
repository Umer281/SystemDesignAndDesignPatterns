import  mongoose  from 'mongoose';



const urlSchema = new mongoose.Schema({

    shortId: {
        type: String,
        required:true,
        unique: true
    },

    redirectUrl: {
        type: String,
        required: true,
        unique: true
    },
    visitsHistory: [{timestamp: {type: Number}}]
}, {timestamps: true });

const UrlModel = mongoose.model('urlModel', urlSchema);

export default UrlModel;