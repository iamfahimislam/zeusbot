const request = require('superagent')
const MessageEmbed = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: "catfacts",
 category: "• Utility",
    description: "generates a random fun fact about cats!",
    usage: "catfacts",
    run: async (client, message, args) => {
        request.get('https://catfact.ninja/fact').end((err, res) => {
            if (!err && res.status === 200) {
                  const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Cat Fact's!")
      .setDescription(res.body.fact);


                message.channel.send(embed)
            } 
            else {
                console.log(`REST call failed: ${err}`);
            }
        });
    },
};