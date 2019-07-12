const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const client = new Discord.Client();
const bot = new Commando.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
	message.reply('Hey, I\'m a reply!')
  .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
  .catch(console.error);
  }
});

client.on('message', message => {
  if (message.content === 'avatar') {
    message.channel.pinned(message.author.avatarURL);
  }
});

client.login('NTk3NjY1MTEwMTUyMTgzODE5.XSLZag.z5dnmzKyqgYlpB0V4cRPmr-bNuw');