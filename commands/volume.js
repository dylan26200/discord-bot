const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "volume",
    description: "Pour changer le volume de la musique",
    usage: "[volume]",
    aliases: ["v", "vol"],
  },

  run: async function(client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel) return sendError("Je suis désolé mais vous devez être dans un canal vocal pour écouter de la musique!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Il n'y a rien qui joue sur ce serveur.", message.channel);
    if (!serverQueue.connection) return sendError("Il n'y a rien qui joue sur ce serveur.", message.channel);
    if (!args[0]) return message.channel.send(`Le volume actuel est: **${serverQueue.volume}**`);
    if (isNaN(args[0])) return message.channel.send(':notes: Numbers only!').catch(err => console.log(err));
    if (parseInt(args[0]) > 150 || (args[0]) < 0) return sendError('You can\'t set the volume more than 150. or lower than 0', message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
      .setDescription(`Je règle le volume sur: **${args[0] / 1}/100**`)
      .setAuthor("Mon Volume", "https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true")
      .setColor("#E69200")
    return message.channel.send(xd);
  },
};
