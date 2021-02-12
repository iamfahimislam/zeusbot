const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "coinflip",
     category: "• Games",
  aliases: ["cf"],
    description: "Flip A Coin!",
    usage: "coinflip",
    run: async (client, message, args) => {

      //Start

      const coins = [
        "The coin landed on **Heads**!",
        "The coin landed on **Tails**!",
        "The coin landed on **Center**!"
      ]
      
      let result = Math.floor(Math.random() * coins.length);
   message.channel.send(`**${message.author.username}** Flips the coin :dvd:`)
let msg = await message.channel.send("<a:cf:745895750440976415>");
    await msg.edit("<a:cf:745895750440976415>").then(async msg => {
      setTimeout(function() {
        msg.edit(coins[result])}, 5000)
    })
    }
};