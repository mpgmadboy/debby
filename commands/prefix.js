const fs = require('fs');
const config = require('../config.json');

exports.run = function(client, message, args) { // eslint-disable-line no-unused-vars
  if (message.author.id !== config.ownerID) return;
  const newPrefix = message.content.split(' ').slice(1, 2)[0];
  config.prefix = newPrefix;
  fs.writeFile('../config.json', JSON.stringify(config), (err) => console.error); // eslint-disable-line no-unused-vars
  message.channel.send(`:white_check_mark: prefix has been changed to ${newPrefix}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
  
exports.help = {
  name: 'prefix',
  description: 'change the preset prefix',
  usage: 'custom prefix'
};
  