const request = require('superagent')
const MessageEmbed = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: "dogfacts",
  category: "• Utility",
  description: "generates a random fun fact about dogs!",
    usage: "dogfacts",
    run: async (client, message, args) => {
        request.get('https://dog-api.kinduff.com/api/facts').end((err, res) => {
            if (!err && res.status === 200) {
                 const dembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Dog Fact's!")
      .setDescription(res.body.facts[0]);


                message.channel.send(dembed)
            } 
            else {
                console.log(`REST call failed: ${err}`);
            }
        });
    },
};
