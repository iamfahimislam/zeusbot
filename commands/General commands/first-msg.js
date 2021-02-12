const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "first-message",
			aliases: ['first-msg'],
			description: 'Responds with the first message ever sent to a channel.',
  category: "• General",

  run: async (client, msg, args) => {
    let channel = msg.channel

    		if (msg.guild && !channel.permissionsFor(client.user).has('READ_MESSAGE_HISTORY')) {
			return msg.reply(`Sorry, I don't have permission to read ${channel}...`);
		}
		const messages = await channel.messages.fetch({ after: 1, limit: 1 });
		const message = messages.first();
		const embed = new MessageEmbed()
			.setColor(message.member ? message.member.displayHexColor : 0x00AE86)
			.setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true }))
			.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
			.setDescription(message.content)
			.setTimestamp(message.createdAt)
			.setFooter(`ID: ${message.id}`)
			.addField('❯ Jump', message.url);
		return msg.channel.send(embed);
	}

  }