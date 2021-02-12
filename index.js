const { GiveawaysManager } = require("discord-giveaways");
const { token, default_prefix } = require("./config.json");
const { prefix } = require("./config.json");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")
const { Client, MessageEmbed } = require('discord.js');
const { badwords } = require("./data.json");
const Canvas = require("canvas");
const path = require('path');
const { utc } = require("moment");
const discord = require ("discord.js")
const fs = require("fs");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const Default_Prefix = "z!";
const { createCanvas, loadImage, registerFont } = require('canvas');
const request = require('node-superfetch');
const Discord = require("discord.js");
const config = require('./config.json');
 
//alexa ai api
const alexa = require('alexa-bot-api')
var chatbot = new alexa("aw2plm")

const client = new discord.Client({
  disableEveryone: true // what does this disable thing do?
});
const db = require("quick.db"); //WE WILL BE USING QUICK.DB
const { addexp } = require("./handlers/xp.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

//IS URL FUNCTION - START

function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

//FINISH
client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})
//STOP
client.on("message", async message => {
  if (message.author.bot) return;
  //START
  if (!message.member.hasPermission("VIEW_AUDIT_LOG")) {
    
    let confirm = false;
    //NOW WE WILL USE FOR LOOP
    var i;
    for (i = 0; i < badwords.length; i++) {
      if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
    }

    if (confirm) {
      message.delete();
      return message.reply("I'm reporting you to my master right away!");
    }
  }

  //END
  if (!message.guild) return; 
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command) command.run(client, message, args);

  return addexp(message);
});
//prefix


  
// Starts updating currents giveaways

//GONNA USE EVENT HERE

//this  is status command
client.on("ready", async () => {
  console.log(`${client.user.username} is online`);
  let statuses = [
    `with my master~`,

    `| z!help`,]; //Your Status's
  setInterval(function() {
        let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(STREAMING, {
          type: "STREAMING",
          url: "https://www.twitch.tv/zeusmeow"
        });
      }, 5000);
    });
//status end here

client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  let CurrentServerPrefix = db.get(`Prefix_${message.guild.id}`);
  if (CurrentServerPrefix === null) CurrentServerPrefix = Default_Prefix;

  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) 
    return message.channel.send(`My Current Prefix Is : ${CurrentServerPrefix}`)
  
   if (message.content == "nya"){
                message.channel.send("<:nyaaa:717409047875289149>")
        }

}
          )


//Alexa AI codes
client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.id !== "719624518171230270") return;
  let content = message.content;
  chatbot.getReply(content).then(r => message.channel.send(r))
  });




client.on("guildCreate", async guild => {
  const channel = guild.SystemChannel
  channel.send(`Meow Meow~ Thanks for adding me in your server >~<\n\
This bot created by **rikai#0628**\n\
For more info type \`${config.Default_Prefix}help`)

  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  );
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});



client.login(token);
