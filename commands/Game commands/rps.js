const Discord = require("discord.js");

module.exports = {
  name: "rps",
  description: "Play a game of rock-paper-scissors",
  aliases: [""],
  usage: "rps",
   category: "• Games",
  run: async (client, message, args) => {
    const rock = client.emojis.cache.get("747750377147072572");
    const paper = client.emojis.cache.get("747751023233466440");
    const scissors = client.emojis.cache.get("747751465266708580");

    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setDescription("Choose your weapon!")
      .setColor("RANDOM")
      .setTimestamp();

    //Send a message
    const m = await message.channel.send(embed);
    //Add reactions to that message
    const react1 = await m.react(rock);
    const react2 = await m.react(paper);
    const react3 = await m.react(scissors);
    //Create an array of our choices
    const chooseArr = [rock, paper, scissors];
    //Pick a random choice (For the bot)
    const randChoice = await chooseArr[
      Math.floor(Math.random() * chooseArr.length)
    ];

    //Get the users reaction from the message
    let collector = await m.createReactionCollector(
      (reacted, user) => user.id === message.author.id
    );

    //Collect the users reaction
    collector.on("collect", async (reaction, user) => {
      //Embeds for win, draw and loss
      let winEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`You won!`)
        .addFields({
          name: "Results:",
          value: `${reaction._emoji} vs ${randChoice}`
        })
        .setColor("GREEN")
        .setTimestamp();

      let tieEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`You tied!`)
        .addFields({
          name: "Results:",
          value: `${reaction._emoji} vs ${randChoice}`
        })
        .setColor("RANDOM")
        .setTimestamp();

      let lostEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`You lost!`)
        .addFields({
          name: "Results:",
          value: `${reaction._emoji} vs ${randChoice}`
        })
        .setColor("RED")
        .setTimestamp();

      //Methods of winning
      if (
        (reaction._emoji === rock && randChoice === scissors) ||
        (reaction._emoji === paper && randChoice === rock) ||
        (reaction._emoji === scissors && randChoice === paper)
      ) {
        m.delete();
        message.channel.send(winEmbed);
        //Tie if user emoji and ranodm emoji are the same
      } else if (reaction._emoji === randChoice) {
        m.delete();
        message.channel.send(tieEmbed);

        //Else the user loses
      } else {
        m.delete();
        message.channel.send(lostEmbed);
      }
    });
  }
};
