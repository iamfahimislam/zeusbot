const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
   category: "• Administration",
  usage: "embed <#channel> <message>",
  run: async (client, message, args) => {
  
  //Members with these permissions can use this command.
  if (!message.member.hasPermission("ADMINISTRATOR")) 
  return message.channel.send("Members with Admin permissions can use this commands.");
      
      
    let argsresult;
    let mChannel = message.mentions.channels.first();

    message.delete();
         //if the channel is mentioned.
    if (mChannel) {
      argsresult = args.slice(1).join(" ");
     const embed = new MessageEmbed()
     .setTitle("New Announcement!")
     .setDescription(argsresult)
     .setColor("000001")
      mChannel.send(embed);
    } else {   //if there is no channel is mentioned.
      argsresult = args.join(" ");
    
     const embed = new MessageEmbed()
     .setDescription(argsresult)
     .setColor("RANDOM")
    message.channel.send(embed);
   }
  }
};

