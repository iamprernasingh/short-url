const express = require('express');
const Router = express.Router();
const { handleGenerateNewShortUrl } = require("../controllers/url");

Router.post('/',handleGenerateNewShortUrl);

module.exports = Router;