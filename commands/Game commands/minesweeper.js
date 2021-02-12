const Minesweeper = require('discord.js-minesweeper');

module.exports = {
    name: "minesweeper",
     category: "• Games",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
      
      const minesweeper = new  Minesweeper({
        returnType: 'emoji'
      });
      var mines = minesweeper.start()
      message.channel.send(mines)
    }
}