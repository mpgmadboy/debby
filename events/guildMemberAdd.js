module.exports = member =>{
    const channel = member.guild.channels.find('name', 'member-log');  
    channel.send(`Welcome to the server, ${member}`);
 };