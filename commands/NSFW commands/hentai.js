const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'hentai',
  description: 'Send A Hentai Gif Lol',
  usage: '[Prefix]hentai',
   category: '• NSFW',
  run: async (client, message, args) => {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/Random_hentai_gif`
    );

    if (message.channel.nsfw == false) {
      return message.channel.send(
        'Sorry Please **Turn On NSFW In Channel Settings** To Use This Command!'
      );
    }
    let hentaiEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Hentai With Senpai UwU!')
      .setImage(body.url)
      .setFooter(
      message.member.user.username.toUpperCase(),
      message.member.user.displayAvatarURL()
    );
    message.channel.send(hentaiEmbed);
  }
};