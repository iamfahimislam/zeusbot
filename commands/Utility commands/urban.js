const urban = require('urban');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "urban",
    aliases: ['ud'],
 category: "• Utility",
    usage: "urban <word>",
    description: "gives urban dictionary definiton of a random word.",
    run: async (client, message, args) => {
        if (args.length < 1) {
            return message.channel.send('Please enter a word');
        }
        let word = args.join(' ');
        console.log(word);

        urban(word).first(json => {
            if (!json) {
                return message.channel.send('No such word exists!');
            }
            console.log(json);
            const def = new MessageEmbed()
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumb_down, true)
                .setTimestamp(new Date())
                .setFooter(`Written by ${json.author}`);

            message.channel.send(def);
        });
    },
};
