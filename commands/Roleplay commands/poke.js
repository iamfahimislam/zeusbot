const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "poke",
       category: "• Roleplay",

    run:async (client, message, args, tools) => {
    let rUser = message.mentions.members.first();

    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke");

    if (!args[0]) {
        const ghembed = new Discord.MessageEmbed()
            .setColor(0xa88e79)
            .setDescription(`**<@${message.author.id}>** teasing someone`)
            .setImage(body.url)
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.mentions.has(message.author)) {
        const hembed = new Discord.MessageEmbed()
            .setColor(0xa88e79)
            .setDescription(`**<@${message.author.id}>** poked <@${rUser.user.id}>`)
            .setImage(body.url)
        message.channel.send({
            embed: hembed
        })
        return;
    } 
    const ghembed = new Discord.MessageEmbed()
        .setColor(0xa88e79)
        .setDescription(`**<@${message.author.id}>** Are you making fun of yourself?`)
        .setImage(body.url)
    message.channel.send({
        embed: ghembed
    });
}
}
