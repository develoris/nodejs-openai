
require('dotenv').config();
const configuration = {
    // organization: "Personal",
    apiKey: process.env.OPENAI_API_KEY,
    ...(process.env.ORGANIZATION && { organization : process.env.ORGANIZATION })
};

module.exports.configuration = configuration;

