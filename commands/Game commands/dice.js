const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "dice",
       category: "• Games",
  aliases: ["dice", "roll"],
    description: "Roll your dice",
    usage: "dice",
    run: async (client, message, args) => {

      //Start

      const dice = [
"You got <:dice1:746038911452840068>",
"You got <:dice2:746044182925148216>",
"You got <:dice3:746044628444381274>",
"You got <:dice4:746044836213424218>",
"You got <:dice5:746045023493161080>",
"You got <:dice6:746045101750353970>"
      ]
      
      let result = Math.floor(Math.random() * dice.length);
   message.channel.send(`**${message.author.username}** Rolls dice :game_die:`)
let msg = await message.channel.send("<a:dice:746040599928635442>");
    await msg.edit("<a:dice:746040599928635442>").then(async msg => {
      setTimeout(function() {
        msg.edit(dice[result])}, 5000)
    })
    }
};