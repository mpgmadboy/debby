exports.run = function(client, message, args) {
  var argresult = args.join(' ');
  client.user.setGame(argresult);
  message.send(`game has been set to ${argresult}`);
};

exports.conf = {
  aliases: [],
  permLevel: 3
};
  
exports.help = {
  name: 'setGame',
  description: 'set the game of the bot.',
  usage: 'setgame <game name here>'
};