exports.run = async (client, message) => {
  message.channel.send('are you sure you want to do a reboot? \n\nReply with \'cancel\' to abort the reboot. The reeboot will self-abort 30 seconds. ');

  const validAnswers = ['yes', 'y', 'no', 'n', 'cancel', 'c'];
  const collector = message.channel.collect(m => m.author.id === message.author.id, { time: 30000 });

  collector.on('message', async (m) => {
    const lower = m.content.tolowerCase();
    if (lower === 'cancel' || lower === 'c' || lower === 'no' || lower === 'n') {
      return collector.stop('abort');
    } else if (lower === 'yes' || lower === 'y') {
      return collector.stop('kill');
    }
    return message.channel.send(`Only \` ${validAnswers.join("', '")}\` are valid, please supply one of those.`);
  });

  collector.on('end', async (collected, reason) => {
    if (reason === 'kill') {
      await message.channel.send('Rebooting now....');
      await client.destroy();
      process.exit();
    } else if (reason === 'time') {
      return message.channel.send('reboot timed out.');
    } else if (reason === 'abort') {
      return message.channel.send('Aborting reboot!');
    }
  });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
};

exports.help = {
  name: 'reboot',
  description: 'reboots something.',
  usage: '',
};
