const {mongoose} = require('mongoose');


async function coonectToMongoDb(url){
    return mongoose.connect(url)
}


module.exports = {coonectToMongoDb}