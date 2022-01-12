const Discord = require('discord.js'); //import client from discord

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
    else {
        msg.reply(msg.content);
    }
});

client.login(process.env.TOKEN); //login bot using token