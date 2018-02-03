exports.run = (client, message) => {
  const totalPlaylists = client.playlists.array().reduce((prev, curr) => prev + curr.playlists.length, 0);
  const totalGuilds = client.playlists.array().filter(q => !!q.dispatcher).length;
  message.channel.send(`currently queuing a total of ${totalPlaylists} songs on ${totalGuilds} servers, for a total of ${totalPlaylists + totalGuilds} songs`);
};

exports.conf = {
  aliases: ['info'],
  permLevel: 0
};
  
exports.help = {
  name: 'stats',
  description: 'displays the data for the queue.',
  usage: 'stats'
};