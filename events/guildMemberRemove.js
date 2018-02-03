module.exports = member =>{
    const channel = member.guild.channels.find('name', 'member-log');  
   channel.send(`say goodbye to, ${member} they will be missed!`);
};