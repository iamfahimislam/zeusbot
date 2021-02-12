const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "hug",
      category: "• Roleplay",
    usage: "hug ",

    run:async (client, message, args, tools) => {
    let rUser = message.mentions.members.first();

    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/hug"); //aita main

    if (!args[0]) {
        const ghembed = new Discord.MessageEmbed()
            .setColor(0xa88e79)
            .setDescription(`**<@${message.author.id}>** mention someone to hug`)
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.mentions.has(message.author)) {
        const hembed = new Discord.MessageEmbed()
            .setColor(0xa88e79)
            .setDescription(`**<@${message.author.id}>** hugggss <@${rUser.user.id}>`)
            .setImage(body.url)
        message.channel.send({
            embed: hembed
        })
        return;
    } 
    const ghembed = new Discord.MessageEmbed()
        .setColor(0xa88e79)
        .setDescription(`**<@${message.author.id}>** *hugs the void :c*`)
        .setImage(body.url)
    message.channel.send({
        embed: ghembed
    });
}
}
