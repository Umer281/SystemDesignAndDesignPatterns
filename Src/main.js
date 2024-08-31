const express = require('express');


const app = express();
const PORT  = process.env.PORT || 5000;

app.get('/', (req, res) => {
    console.log("Get called inside docker container");
});


app.listen(PORT,() => {
    console.log(`server listening on ${PORT}`);
})