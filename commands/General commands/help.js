const discord = require("discord.js")
const db = require("quick.db")
const { getServerPrefix } = require("../../handlers/util2");

module.exports = {
  name: "help",
      aliases: ["h"],
  description:
    "Get list of all command",
  usage: "help <plugin>",
  category: "General",
  run: async (client, message, args) => {
    const guildId = message.guild.id;
    const serverPrefix = await getServerPrefix(guildId);

    let cate = args[0]
    if (cate) {
      if (cate === "actions") {
        let embed = new discord.MessageEmbed()
          .setTitle("• Actions commands")
          .setDescription("`bite`, `cuddle`, `hug`, `kiss`, `notwork`, `poke`, `slap`")
          .setFooter(`Use ${serverPrefix || "z."} before every command`)
        return message.channel.send(embed)
      } else {
        if (cate === "fun") {
          let embed = new discord.MessageEmbed()
            .setTitle("• Fun commands")
            .setDescription("`8ball`, `ascii`, `choose`, `hack`, `howgay`, `meme`, `pp`, `reverse`")
            .setFooter(`Use ${serverPrefix || "z!"} before every command`)

          return message.channel.send(embed)
        } else {
          if (cate === "games") {
            let embed = new discord.MessageEmbed()
              .setTitle("• Games commands")
              .setDescription("`coinflip`, `dice`, `minesweeper`, `rps`")
              .setFooter(`Use ${serverPrefix || "z!"} before every command`)

            return message.channel.send(embed)
          } else {
            if (cate === "general") {
              let embed = new discord.MessageEmbed()
                .setTitle("• General commands")
                .setDescription("`avatar`, `botinfo`, `channelinfo`, `emoji`, `first-message`, `help`, `invite`, `ping`, `say`, `servericon`, `serverinfo`, `snipe`, `ticket`, `userinfo`, `zeus`")
                .setFooter(`Use ${serverPrefix || "z!"} before every command`)

              return message.channel.send(embed)
            } else {
              if (cate === "admin") {
                let embed = new discord.MessageEmbed()
                  .setTitle("• Administration commands")
                  .setDescription("`addemoji`, `blacklist`, `createrole`, `dm`, `embed`, `nick`, `prefix`, `resetwarns`, `setleave`, `setwel`, `slowmode`")
                  .setFooter(`Use ${serverPrefix || "z!"} before every command`)

                return message.channel.send(embed)
              } else {
                if (cate === "moderation") {
                  let embed = new discord.MessageEmbed()
                    .setTitle("• Moderation commands")
                    .setDescription("`ban`, `clear`, `kick`, `mute`, `purge`, `softban`, `unmute`, `warn`, `warnings`")
                    .setFooter(`Use ${serverPrefix || "z!"} before every command`)

                  return message.channel.send(embed)
                } else {
                  if (cate === "nsfw") {
                    let embed = new discord.MessageEmbed()
                      .setTitle("• NSFW commands")
                      .setDescription("`boobs`, `hentai`, `neko`")
                      .setFooter(`Use ${serverPrefix || "z!"} before every command`)

                    return message.channel.send(embed)
                  } else {
                    if (cate === "utility") {
                      let embed = new discord.MessageEmbed()
                        .setTitle("• Utility commands")
                        .setDescription("`amazeme`, `anime`, `catfacts`, `character`, `clyde`, `corona`, `dogfacts`, `github`, `imdb`, `lmgtfy`, `manga`, `pokemon`, `scrap`, `steam`, `urban`, `weather`")
                        .setFooter(`Use ${serverPrefix || "z!"} before every command`)

                      return message.channel.send(embed)
                    }
                  }
                }
              }
            }
          }
        }
      }

    } else {
      let embed = new discord.MessageEmbed()
        .setColor("BLACK")
       .setTitle("<a:wumpus:713098375867924490> Zeus Help Menu")
      
        .addField("• General", `\`${serverPrefix || "z!"}help general\``, true)
        .addField("• Utility", `\`${serverPrefix || "z!"}help utility\``, true)
        .addField("• Fun", `\`${serverPrefix || "z!"}help fun\``, true)
        .addField("• Games", `\`${serverPrefix || "z!"}help games\``, true)
        .addField("• Actions", `\`${serverPrefix || "z!"}help actions\``, true)
        .addField("• Administration", `\`${serverPrefix || "z!"}help admin\``, true)
        .addField("• Moderation", `\`${serverPrefix || "z!"}help moderation\``, true)
        .addField("• NSFW", `\`${serverPrefix || "z!"}help nsfw\``, true)
        .setImage("https://cdn.discordapp.com/attachments/651767857587159040/713308484367679589/announcements.gif")
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(
        message.member.user.username,
        message.member.user.displayAvatarURL()
      )
      .setTimestamp();
       
      message.channel.send(embed)
    }
  }
}