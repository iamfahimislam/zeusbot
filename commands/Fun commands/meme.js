const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  description: "send a meme",
  usage: "meme",
  category: "• Fun",
  run: async (bot, message, args) => {
    let msg = await message.channel
      .send("Generating memes from reddit...")
      .then(m => m.delete({ timeout: 2000 }));

    fetch("https://apis.duncte123.me/meme")
      .then(res => res.json())
      .then(body => {
        if (!body) return message.channel.send("I've broke, try again!");

        let Embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(body.data.title)
          .setImage(body.data.image)
          .setTimestamp()
          .setFooter(
            message.member.user.username,
            message.member.user.displayAvatarURL()
          );

        message.channel.send(Embed);
      });
  }
};
