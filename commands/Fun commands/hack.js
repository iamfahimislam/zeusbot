const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
  name: "hack",
  aliases: null,
 category: "• Fun",
  description: "Hack Member!",
  usage: "Hack <Mention Member>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    let pass = Math.floor(Math.random() * 11);

    let passwords = Math.random()
      .toString(36)
      .toLowerCase()
      .substr(2, pass);

    let Member =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Hack!`
      );

    if (Member.id === message.author.id)
      return message.channel.send(`You Can't Hack Your Self BaKa!`);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hack Status: Completed`)
      .setDescription(
        `Name: ${Member.username} | ID: ${
          Member.id
        } | Email: ${Member.username + pass} | Password: ${passwords}`
      )
      .setTimestamp();


    let msg = await message.channel.send(`Hacking ${Member.username}`);
    await msg.edit(`hacking started`).then(async msg => {
      setTimeout(function() {
        msg.edit(`hacking in progress...`)}, 4000
                 )})}
    
    
  
    }