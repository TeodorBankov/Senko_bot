const client = require('nekos.life');
const neko = new client();
let searches = Object.keys(neko.nsfw);
module.exports = {
    async run(bot) {
        bot.on('/neko', async (msg) => {
            let url = await neko.nsfw[searches[Math.round(Math.random() * searches.length)]]();
            return msg.reply.photo(url.url);
        });
    }
};