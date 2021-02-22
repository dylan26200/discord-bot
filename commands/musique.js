const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "musique",
    description: "Pour afficher la musique en cours de lecture sur ce serveur",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Il n'y a rien qui joue sur ce serveur.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Now Playing", "https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true")
      .setThumbnail(song.img)
      .setColor("#E69200")
      .addField("Nom", song.title, true)
      .addField("Durée", song.duration, true)
      .addField("Demandé par", song.req.tag, true)
      .setFooter(`Vues: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};
