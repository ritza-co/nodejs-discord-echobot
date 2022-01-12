const { Client } = require('discord'); //import client from discord

Client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

Client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
    else {
        msg.reply(msg.content);
    }
});

Client.login(process.env.TOKEN); //login bot using token