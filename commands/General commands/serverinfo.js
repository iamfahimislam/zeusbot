const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const regions = {
  brazil: "Brazil",
  europe: "Europe",
  hongkong: "Hong Kong",
  india: "India",
  japan: "Japan",
  russia: "Russia",
  singapore: "Singapore",
  southafrica: "South Africa",
  sydeny: "Sydeny",
  "us-central": "US Central",
  "us-east": "US East",
  "us-west": "US West",
  "us-south": "US South"
};

const filterLevels = {
  DISABLED: "Off",
  MEMBERS_WITHOUT_ROLES: "No Role",
  ALL_MEMBERS: "Everyone"
};
const verificationLevels = {
  NONE: "None",
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "(╯°□°）╯︵ ┻━┻",
  VERY_HIGH: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"
};

module.exports = {
  name: "serverinfo",
  aliases: ["si"],
  category: "• General",
  usage: "serverinfo",
  async run(client, message, args) {
    const channels = message.guild.channels.cache;
    const roles = message.guild.roles.cache
      .sort((a, b) => b.position - a.position)
      .map(role => role.toString());
    const members = message.guild.members.cache;
    const emojis = message.guild.emojis.cache;
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach(emoji => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });

    let embed = new MessageEmbed()

      .setColor(`RANDOM`)
      .setAuthor(message.guild.name, message.guild.displayAvatarURL)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))

      .setTitle("❯ Serverinfo!")
      .addField("General", [
        `**❯ Name:** ${message.guild.name}`,

        `**❯ ID:** ${message.guild.id}`,
        `**❯ Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
        `**❯ Region:** ${regions[message.guild.region]}`,
        `**❯ Boost Tier:** ${
          message.guild.premiumTier
            ? `Tier ${message.guild.premiumTier}`
            : "None"
        }`,
        `**❯ Explicit Filter:** ${
          filterLevels[message.guild.explicitContentFilter]
        }`,
        `**❯ Verification Level:** ${
          verificationLevels[message.guild.verificationLevel]
        }`,
        `**❯ Time Created:** ${moment(message.guild.createdTimestamp).format(
          "LT"
        )} ${moment(message.guild.createdTimestamp).format("LL")} ${moment(
          message.guild.createdTimestamp
        ).fromNow()}`,
        "\u200b"
      ],true)

      .addField("Statistics", [
        `**❯ Role Count:** ${roles.length}`,
        `**❯ Emoji Count:** ${emojis.size}`,
        `**❯ Regular Emoji Count:** ${
          emojis.filter(emoji => !emoji.animated).size
        }`,
        `**❯ Animated Emoji Count:** ${
          emojis.filter(emoji => emoji.animated).size
        }`,
        `**❯ Member Count:** ${message.guild.memberCount}`,
     
        `**❯ Text Channels:** ${
          channels.filter(channel => channel.type === "text").size
        }`,
        `**❯ Voice Channels:** ${
          channels.filter(channel => channel.type === "voice").size
        }`,
        `**❯ Boost Count:** ${message.guild.premiumSubscriptionCount || "0"}`,

        "\u200b"
      ],true)

     

       
  .setFooter(
        message.member.user.username,
        message.member.user.displayAvatarURL()
      )
      .setTimestamp();


    message.channel.send(embed);
  }
};
