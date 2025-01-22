const openAIconf = require('../config/openai.config.js');
const OpenAI = require('openai');
/**
 * 
 * @param {string} message 
 * 
 */
 const getCompletion = async (message) => {
    const openai = new OpenAI(openAIconf.configuration);
    const completion = await openai.chat.completions.create({
        model: process.env.MODEL ? process.env.MODEL : "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
    });
    return completion.data.choices[0].message
}

module.exports = {
    getCompletion
}