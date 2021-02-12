const { OWNER_ID } = require("../../config.json")
module.exports = {
  name: "sleep",
  aliases: ["rest", "reset"],
  description: "Restart The Bot",
  category: "• Bot Owner",
  run: async(client, message, args) => {

    if (message.author.id === OWNER_ID) {
       message.channel.send(`*yawnnnnsss*`)
let msg = await message.channel.send("I guess I'm gonna take a nap");
    await msg.edit("I guess I'm gonna take a nap...").then(async msg => {
      setTimeout(function() {
        msg.edit("nvm")}, 5000)
    })
       
        setTimeout(() => {
            process.exit(0);
        }, 5000);
    } else {
        return message.channel.send("You dont ordr me :<.");
    }
},
}

   
