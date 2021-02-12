const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "howgay",
    category: "• Fun",
    description: "Shows how gay you are!",
    usage: "howgay <Mention Member>",
    run: async (client, message, args) => {

        //Start

        let Member = message.mentions.users.first() || message.guild.member(args[0]) || message.author;

		let Result = Math.floor(Math.random() * 101);

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Gay Machine`)
        .setDescription(`${Member.username} Is ${Result}% Gay 🏳️‍🌈`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();

        message.channel.send(embed);
  
        //End

    }
};