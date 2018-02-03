exports.run = function(client, message, args) { // eslint-disable-line no-unused-vars
  message.reply(message.author.avatarURL);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'avatar',
  description: 'shows ur ugly pic.',
  usage: 'avatar [command]',
};

