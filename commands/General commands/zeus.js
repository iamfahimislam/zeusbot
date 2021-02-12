const { MessageEmbed } = require("discord.js");
const { utc } = require('moment');
const ms = require('ms');
const { version } = require('../../package.json');
const os = require('os');

module.exports = {
  name: "zeus",
  aliases: ["nya"],
  usage: "zeus",
   category: "• General",

  run: async (client, message, args) => {


    let embed = new MessageEmbed()
      .setColor(`000001`)
      .setTitle("Everything About Zeus")
      .setThumbnail(client.user.avatarURL())
			.setDescription(`
❖ **Name:** Zeus, Meenu, Venessa etc?
❖ **Owner:** rikai
❖ **Age:** 1 years
❖ **Birthday:** 03-Oct-2019
❖ **Gender:** Female
❖ **Language:** meow meow
❖ **Favorite Place to sleep:**  Under the sofa/bed, on the keyboard and high places.
❖ **Favorite Food:** Sweets, Chocolate Cake, Chips, Fish, etc.
❖ **Favorite Drinks:** Milk.
❖ **Hobbies:** Killing spiders, cockroaches, lizards and mice etc.
❖ **Hates:** Being locked in the room.`)   
    message.channel.send(embed);
  }
};
