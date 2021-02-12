  const discord = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["pong"],
     category: "• General",
    usage: "ping",
    description: "Get the bot's ping!",
    run: async (client, message, args) => {

     let start = Date.now();
  
  message.channel.send({embed: {description: "Looks like i'm a bit slow :c", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new discord.MessageEmbed()
    .setAuthor("Ping!", message.author.avatarURL())
    .addField(":red_circle: API Latency", Math.round(client.ws.ping) + "ms", true)
    .addField(":yellow_circle: Message Latency", end - start + "ms", true)
    .setColor("RANDOM")
      .setFooter(
        message.member.user.username,
        message.member.user.displayAvatarURL()
      )
      .setTimestamp();
;
    m.edit(embed).catch(e => message.channel.send(e))
     
   message.react('🏓') 
  })

    }
};