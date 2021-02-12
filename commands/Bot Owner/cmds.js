const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cmds",
   aliases: [""],
  description: "Get list of all command and even get to know every command detials",
  usage: "cmds",
   category: "• Owner",
  run: async (client, message, args) => {
          if (message.author.id === "560792103303512065") {

    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided :(")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("000001")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setTitle("<a:wumpus:713098375867924490> Zeus Help Menu")
        .setDescription("Here is the list of commands!\n For more info on a specific command, use `z!help {command}`")
        .setColor("000001")
        .setImage("https://cdn.discordapp.com/attachments/651767857587159040/713308484367679589/announcements.gif")
        .setThumbnail(client.user.displayAvatarURL())
          .setFooter(
        message.member.user.username,
        message.member.user.displayAvatarURL()
      )
      .setTimestamp();

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || ":hourglass: In Progress";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category} [${value.length}]`, desc);
      }

      return message.channel.send(emx);
    }
          }
  }
};
