const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  category: "• Moderation",
  description: "Ban users from guild",
  usage: "ban <@user> <reason>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
    }
    
    let target = message.mentions.members.first();
    
    if(!args[0]) {
      return message.channel.send(`**${message.author.username}**, Please mention the user!`)
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, You got banned ? ;o`)
    }
    
let reason = args.slice(1).join(" ");
    if (!reason) reason = "-";
    
    const embed = new MessageEmbed()
      .setTitle("BAN MEMBER")
      .setColor("RANDOM")
      .setThumbnail(target.user.displayAvatarURL)
      .setDescription(
        `Action : Ban \nReason: ${reason} \nUser: ${target } \nModerator: ${message.member}`
      )
      .setTimestamp();
    
    message.channel.send(embed)
    
    target.ban(args[0]);
    
    
    
  }
}