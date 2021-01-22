const client = require('nekos.life');
const Markup = require('telegraf').Markup;
const Telegraf = require('telegraf');
const neko = new client();
let searches = Object.keys(neko.nsfw);
module.exports = {
    async run(bot) {
        bot.command('neko', async (ctx) => {
            let url = await neko.nsfw[searches[Math.round(Math.random() * searches.length)]]();
            ctx.replyWithPhoto(url);
        });
    }
};