const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "Pour ajouter / inviter le bot sur votre serveur",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Pour inviter le Bot Musique Cliquez sur Invitez le BOT ! \n\n [Invitez le BOT](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("#E69200")
    .setFooter("Invite Moi !!","https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true")
    return message.channel.send(invite);
  },
};
