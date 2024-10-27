const express = require('express');
const {coonectToMongoDb} = require('./connect')
const port = 8020; 

const app = express();

app.use(express.urlencoded({extended: true}));

//db connection 
coonectToMongoDb('mongodb://localhost:27017/shortUrl').then(() => {
    console.log('mongo db connected')
})



require('./route/index');



app.listen(port, () => {
  console.log(`server listining at port ${port}`)
})


