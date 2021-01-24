const client = require('nekos.life');
const neko = new client();
let searches = Object.keys(neko.nsfw);
module.exports = {
    async run(bot) {
        bot.on(/^\/neko(@Senko_kitsune_bot)?/, async (msg) => {
            let url = await neko.nsfw[searches[Math.round(Math.random() * searches.length)]]();
            console.log("/neko command executed: "+url.url);
            return msg.reply.photo(url.url);
        });
    }
};