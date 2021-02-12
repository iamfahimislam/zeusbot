const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "notwork",
       category: "• Roleplay",
  aliases: ["nw"],
    description: "Thats not how it works you little shit",
    usage: "notwork",
    run: async (client, message, args) => {


    message.channel.send("https://cdn.discordapp.com/attachments/719624518171230270/746665266238193725/image0-2.jpg");
      message.delete();
    }
};