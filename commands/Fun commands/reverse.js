const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const EmbedColor = "RANDOM";
const ErrorMessage = `Error In Getting Information | Please Try Again Later!`;
const ErrorEmbedColor = "RED";
const Prefix = "!";

module.exports = {
  name: "reverse",
  description: "Reverse Your Message / Text",
  aliases: [""],
   category: "• Fun",
  usage: "reverse <Message>",
  example: "reverse Minecraft",
  run: async (client, message, args) => {
    try {

      if (!args[0]) { 
		return message.channel.send(`Please Give Me Text!`) 
       } else {
        const embed = new MessageEmbed()
          .setColor(`${EmbedColor}`)
          .setDescription(args.join(' ').split('').reverse().join(''))
		  message.channel.send(embed)};

      await message.delete();
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
}