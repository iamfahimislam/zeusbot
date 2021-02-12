module.exports = {
  name: "say",
     category: "• General",

  run: async (bot, message, args) => {
    
if (!message.member.hasPermission("SEND_MESSAGES")) 
  return message.channel.send("You do no have the permission to use this command");
  
    let argsresult;
    let mChannel = message.mentions.channels.first();

    message.delete();
    if (mChannel) {
      argsresult = args.slice(1).join(" ");
      mChannel.send(argsresult);
    } else {
      argsresult = args.join(" ");
      message.channel.send(argsresult);
    }
  }
};
