const client = require('nekos.life');
const neko = new client();
module.exports = {
    async run(bot){
    bot.hears(/owo/, async (ctx) => {
        let url = await neko.nsfw.neko();
      ctx.replyWithPhoto(url);
    });
    bot.command('owo', async (ctx) => {
        let url = await neko.nsfw.neko();
      ctx.replyWithPhoto(url);
        });
    }
};