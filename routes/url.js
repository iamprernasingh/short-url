const express = require('express');
const Router = express.Router();
const { handleGenerateNewShortUrl,handleGetAnalytics } = require("../controllers/url");

Router.post('/url',handleGenerateNewShortUrl);
Router.get('/analytics/:shortId',handleGetAnalytics);
module.exports = Router;