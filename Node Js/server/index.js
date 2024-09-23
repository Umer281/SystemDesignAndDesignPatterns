const express = require('express');

const app = express();
const port = 8000;

app.use(express.urlencoded({extended: true}));

//middlwares


app.use((req,res, next) => {
    console.log("iniide middlwares 1");
     if(req.query.token) {
          req.query.isValidUser = true;
     }
    next();
});

app.use((req,res, next) => {
    console.log(req.query.isValidUser, "user1");
    next();
});

//routes 
require('./route/index')(app);  




app.listen(port, () => {
    console.log(`server listning on ${port}`)
})

