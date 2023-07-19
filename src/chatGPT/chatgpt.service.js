const openAIconf = require('../config/openai.config.js');
const { OpenAIApi }  = require('openai');
/**
 * 
 * @param {string} message 
 * 
 */
 const getCompletion = async (message) => {
    const openai = new OpenAIApi(openAIconf.configuration);
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
    });
    return completion.data.choices[0].message
}

module.exports = {
    getCompletion
}