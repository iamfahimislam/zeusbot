const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "slap",
    category: "• Roleplay",
    usage: "slap <@mention>",

    run:async (client, message, args, tools) => {
    let rUser = message.mentions.members.first();

    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap"); //aita main

    if (!args[0]) {
        const ghembed = new Discord.MessageEmbed()
            .setColor(0xa88e79)
            .setDescription(`**<@${message.author.id}>** slapped someone but why he do this?`)
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.mentions.has(message.author)) {
        const hembed = new Discord.MessageEmbed()
            .setColor(0xa88e79)
            .setDescription(`**<@${message.author.id}>** slapped <@${rUser.user.id}> TwT`)
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
