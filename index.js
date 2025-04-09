require('dotenv').config();
const { OpenAI } = require('openai');
const prompt = require('prompt-sync')();

const openai = new OpenAI({ apiKey: ""});

async function getOpenAIResponse(promptText) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: promptText }],
            temperature: 0.7
        });
        console.log("Resposta da OpenAI:", response.choices[0].message.content);
    } catch (error) {
        console.error('Erro ao chamar OpenAI API:', error.response?.data || error.message);
    }
}

const userQuestion = prompt("Digite sua pergunta: ");
getOpenAIResponse(userQuestion);
