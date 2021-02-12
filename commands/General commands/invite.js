const { MessageEmbed } = require("discord.js");
const { utc } = require('moment');
const ms = require('ms');
const { version } = require('../../package.json');
const os = require('os');

module.exports = {
  name: "invite",
  usage: "invite",
   category: "• General",

  run: async (client, message, args) => {
    let embed = new MessageEmbed()
    
      .setTitle("Invite meow in your server~")
      .setColor(`000001`)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL())
      .setURL("https://discord.com/oauth2/authorize?client_id=717647845125259285&scope=bot&permissions=1409657918")
    
       .setFooter(
        message.member.user.username,
        message.member.user.displayAvatarURL()
      )
      .setTimestamp();

 message.author.send(embed)
   message.react('✅') 
  }
};
