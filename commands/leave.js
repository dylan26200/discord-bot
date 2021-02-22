const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "leave",
        aliases: ["goaway", "disconnect", "bye"],
        description: "Quitte le salon vocal!",
        usage: "Leave",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("Je suis désolé mais vous devez être dans un canal vocal pour m'écouté !", message.channel);
        if (!message.guild.me.voice.channel) return sendError("I Am Not In Any Voice Channel!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("Essayer de quitter le Salon...", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Leave Voice Channel", "https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true")
            .setColor("#E69200")
            .setTitle("Success")
            .setDescription("🎶 Pour me faire quitté du salon.")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Left The Voice Channel :C"));
    },
};
