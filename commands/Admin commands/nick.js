const Discord = require("discord.js");
const { MessageEmbed } = require ("discord.js"); 
const fs = require("fs");
const ms = require("ms");

module.exports =  {
  name: "nick",
   category: "• Administration",
  description: "Change the nickname of a user",
  usage: "nick <@name> <newname>",

run : (client, message, args) => {
  let newname = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("**| You Do not have permission to use this command!**");
  if (!user) return message.channel.send('**| Mention the user to set a nickname!**').catch(console.error);
  if (user === message.author.id) return message.channel.send('I cant let you do that, self-harm is bad🤦');
 message.guild.member(user).setNickname(newname).catch(console.error);
 
  const embed = new MessageEmbed()

 .setColor ("RANDOM")
 .setDescription (`<:ok:741903945550659614> Nickname changed ${user}`)
message.channel.send(embed);
}
  };
