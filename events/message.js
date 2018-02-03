const config = require('../config.json');
module.exports = message => {
  const client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  const command = message.content.split(' ')[0].slice(config.prefix.length);
  const params = message.content.split(' ').slice(1);
  const perms = client.elevation(message);
  let commands;
  if (client.commands.has(command)) {
    commands = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    commands = client.commands.get(client.aliases.get(command));
  }
  if (commands) {
    if (perms < commands.conf.permLevel) return;
    commands.run(client, message, params, perms);
  }

};
