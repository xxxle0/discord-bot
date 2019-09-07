const clientDiscord = require('./discord.singleton').client;

const TOKEN_DISCORD = "NjE5NDg3NjI4NjQ2OTQwNjc0.XXI9TA.6WTLv8u8_hUW467CuagSTLBsmNU"

clientDiscord.on("ready", () => {
    console.log('logged in as ' + clientDiscord.user.tag);
});

clientDiscord.on("message", msg => {
    console.log(msg);
    if (msg.content === '<@561598381416251407>') {
        msg.reply('Đợi xíu bố mày đang gọi nó');
    }

    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
})

clientDiscord.login(TOKEN_DISCORD)