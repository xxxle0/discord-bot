const clientDiscord = require('./discord.singleton').client;
require('dotenv').config();

const TOKEN_DISCORD = process.env.TOKEN_DISCORD
console.log(TOKEN_DISCORD);
clientDiscord.on("ready", () => {
    console.log('logged in as ' + clientDiscord.user.tag);
});

clientDiscord.on("message", msg => {
    if (msg.content === '<@561598381416251407>') {
        msg.reply('Đợi xíu bố mày đang gọi nó');
    }

    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
})

clientDiscord.login(TOKEN_DISCORD)