const express = require('express');

const app = express();
const port = 8000;

//routes 
require('./route/index')(app);  




app.listen(port, () => {
    console.log(`server listning on ${port}`)
})

