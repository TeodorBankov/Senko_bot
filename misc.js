// const client = require('nekos.life');
// const Markup = require('telegraf').Markup;
// const Telegraf = require('telegraf');
// const neko = new client();
// let searches = Object.keys(neko.nsfw);
// module.exports = {
//     async run(bot) {
//         bot.command('neko', async (ctx) => {
//             let url = await neko.nsfw[searches[Math.round(Math.random() * searches.length)]]();
//             ctx.replyWithPhoto(url);
//             // let arr = [];
//             // for (let search of searches)
//             //     arr.push(Markup.button.callback(search[0].toUpperCase() + search.substr(1), search));
//             // let result = [], numberOfRows = 4, elementsPerRow = 6;
//             // for (let i = 0; i < numberOfRows; i++) {
//             //     // Add remainder to last row
//             //     const end = i === numberOfRows - 1 ? searches.length : (i + 1) * elementsPerRow;
//             //     const split = searches.slice(i * elementsPerRow, end);
//             //     result.push(split);
//             // }
//             // ctx.reply("Enter what you want to search",
//             //     Markup.inlineKeyboard(arr));
//         });
//         bot.action(searches, async (ctx) => {
//             let url = await neko.nsfw[ctx.match[0]]();
//             // let url = await neko.nsfw.neko();
//             ctx.replyWithPhoto(url);
//         })
//         // bot.action('pussy', async (ctx) => {
//         //     let url = await neko.nsfw.pussy();
//         //     ctx.replyWithPhoto(url);
//         // });
//     }
// };