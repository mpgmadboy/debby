exports.run = async (client, message) => {
  const voiceChannel = message.member.voiceChannel ? message.member.voiceChannel : (message.guild.voiceChannel ? message.guild.voiceConnection.channel : null);
  if (!voiceChannel || (!message.member.voiceChannel && message.author.permLevel < 2 )) {
    return message.reply(':x: please join a voice channel first and try again');
  }
  if (client.playlists.get(message.guild.id).dispatcher.paused) return message.reply('playback is already paused.');
  message.channel.send(':pause_button: pausing playback!');
  client.playlists.get(message.guild.id).dispatcher.pause();
};


exports.conf = {
  enabled:true,
  aliases: ['p'],
  permLevel:2
};


exports.help = {
  name: 'pause',
  description: 'pauses the stream audio.',
  usage:'pause'
};