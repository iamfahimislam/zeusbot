const { MessageEmbed } = require("discord.js");

module.exports =  {   
name: "pp",
category: "• Fun",
aliases: ["penis"],
usage: "pp <user>",
description: "Show's you how long your pp is!",
  

 run: async (client, message, args) => {
    var ppsize = [
      "",
      "=",
      "==",
      "===",
      "====",
      "=====",
      "======",
      "=======",
      "========",
      "=========",
      "==========",
      "===========",
      "============",
      "=============",
      "==============" //little pyramid tho
    ];
    var pp = Math.floor(Math.random() * ppsize.length);
    let ppuser = message.mentions.users.first() || message.member.user;
    const embed = new MessageEmbed()
      .setTitle("Penis Generator")
      .setDescription(`${ppuser.username}'s' penis ( ͡° ͜ʖ ͡°)
8${ppsize[pp]}D`);

    message.channel.send(embed);
  }
};
