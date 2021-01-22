require('dotenv').config();
const client = require('nekos.life');
const neko = new client();
const fs = require('fs');
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.TOKEN);


bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('*Thumbs up*'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears('nigga', (ctx) => ctx.reply('Buy-buy'));

fs.readdir("commands", (_, files) => {
    let commandFiles = files.filter(f => f.endsWith(".js"));
    commandFiles.forEach(commandFile => {
        let command = require(__dirname + "/commands/" + commandFile);
        command.run(bot);
    })
});

bot.launch();

//graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));