
require('dotenv').config();
const { Configuration } = require('openai');
const configuration = new Configuration({
    // organization: "Personal",
    apiKey: process.env.OPENAI_API_KEY
});


module.exports.configuration = configuration;

