const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const EmbedColor = "RANDOM";
const ErrorMessage = `Error In Getting Information | Please Try Again Later!`;
const ErrorEmbedColor = "RED";
const Prefix = "!";

module.exports = {
  name: "channelinfo",
  description: "Give Your Channel Information!",
   category: "• General",
  aliases: [""],
  usage: "Channelinfo <Mention Channel>",
  example: "<prefix>Channelinfo #meme",
  run: async (client, message, args) => {
    try {

    let nsfw = message.channel.nsfw ? 'Yes' : 'No';
    let parent = message.channel.parent ? message.channel.parent : 'No Category';
    let topic = message.channel.topic ? message.channel.topic : 'None';
    let embed = new MessageEmbed()
		.setColor("RANDOM")
        .setTitle('Channel Name: ' + message.channel.name)
        .setDescription('Channel Topic: ' + topic)
        .addField('Channel NSFW Type', nsfw, true)
        .addField("Channel Category", parent, true)
        .addField('Channel Position', message.channel.position, true)
        .addField("Channel Created At", `${message.channel.createdAt.toDateString()}`, true)
         .setFooter(
        message.member.user.username,
        message.member.user.displayAvatarURL()
      )
      .setTimestamp();


    message.channel.send(embed);

      
    } catch (error) {
      console.log(error);
      message.channel.send(
        new MessageEmbed()
          .setColor(`${ErrorEmbedColor}`)
          .setDescription(`${ErrorMessage}`)
          .setFooter(`Sorry For Error!`)
          .setTimestamp()
      );
    }
  }
};