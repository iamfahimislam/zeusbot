const Discord = require('discord.js');
const answer = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Signs point to yes",
    "The reply is hazy, try again",
    "Ask again later",
    "I'd better not tell you now",
    "I cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My sources say no",
    "The outlook isn't so good",
    "Very doubtful",
    "B-Baka! No!",
    "Yes daddy..."
]

module.exports = {
    name: "8ball",
    aliases: [],
       category: "• Fun",
    usage: "8ball <question>",
    description: "Ask the magic 8ball a question.",
    run: async (client, message, args) => {
        let question = message.content.split(/\s+/g).slice(1).join(" ");

        if (!question) {
            return message.channel.send('You must provide a question!');
        }

        const embed = new Discord.MessageEmbed()
            .setAuthor(question, 'https://a.safe.moe/aKDHV.png')
            .setDescription(answer[Math.round(Math.random() * (answer.length - 1))] + '.')
            .setColor('RANDOM');
        return message.channel.send({ embed });

    


    }}