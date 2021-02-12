const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'boobs',
  description: 'Send A boobs Gif Lol',
  usage: '[Prefix]boobs',
  category: '• NSFW',
  run: async (client, message, args) => {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/boobs`
    );

    if (message.channel.nsfw == false) {
      return message.channel.send(
        'Sorry Please **Turn On NSFW In Channel Settings** To Use This Command!'
      );
    }
    let hentaiEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Oppai is justice UwU')
      .setImage(body.url)
      .setFooter(`Requested by ${message.author.username}`);

    message.channel.send(hentaiEmbed);
  }
};