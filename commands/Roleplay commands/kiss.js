const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "kiss",
 category: "• Roleplay",

    run:async (client, message, args, tools) => {
    let rUser = message.mentions.members.first();

    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/kiss");

    if (!args[0]) {
        const ghembed = new Discord.MessageEmbed()
            .setColor(0xa88e79)
            .setDescription(`**<@${message.author.id}>** Nyaaaaaaaaaa, nu dun kiss mee~`)
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.mentions.has(message.author)) {
        const hembed = new Discord.MessageEmbed()
            .setColor(0xa88e79)
            .setDescription(`**<@${message.author.id}>** *kissess* <@${rUser.user.id}> *mhmmmmmmm*`)
            .setImage(body.url)
        message.channel.send({
            embed: hembed
        })
        return;
    } 
    const ghembed = new Discord.MessageEmbed()
        .setColor(0xa88e79)
        .setDescription(`**<@${message.author.id}>** oh? why you want to kiss yourself? Find a friend nya~`)
    message.channel.send({
        embed: ghembed
    });
}
}
