require('dotenv').config();
const express = require('express');
const openAiService = require('./chatGPT/chatgpt.service.js')
const server = express();

server.use(express.json());

server.post('/completion', async (req, res) => {
    try {
        const response = await openAiService.getCompletion(req.body.message)
        res.json(response.content)
    } catch (error) {
        res.status(error.status ? error.status : 500).send(error)
    }
})
server.listen(process.env.PORT || 8080, () => {
    console.log('http://localhost:8080')
})
// console.log(response.data.data);
