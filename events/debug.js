const  chalk = require('chalk');
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

module.exports = client =>{ // eslint-disable-line no-unused-vars
  console.debug(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
};