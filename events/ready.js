module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(`d.help / ${client.guilds.cache.size} serveurs`,{ type: 'WATCHING'});
};