const express = require('express');
const {generateShortNerUrl,redirectToOriginalUrl} = require('../../controllers/urlShortNer/urlShortNer.controller')

const urlShortNerRoute = express.Router();




urlShortNerRoute.post('/', generateShortNerUrl());
urlShortNerRoute.get('/:id', redirectToOriginalUrl());


module.exports = {urlShortNerRoute}