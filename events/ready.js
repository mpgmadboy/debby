const  chalk = require(`chalk`);

module.exports = client =>{
    console.log(chalk.blue(`hello im ${client.user.username}, and im ready!`));
}