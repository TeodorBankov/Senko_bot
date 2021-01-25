require('dotenv').config();
const { YTSearcher } = require('ytsearcher');
//get a youtube api token for searches, if you want to utilize this command in your telegram bot.
const ytsearcher = new YTSearcher(process.env.YT_TOKEN);

module.exports = {
    async run(bot){
        bot.on(/^\/music(@Senko_kitsune_bot)?(.+)?/, async (msg, props) => {
            const args = props.match[0].split(' ').splice(1).join(' ');
            const searchResult = await ytsearcher.search(args, {type: args, maxResults: 1000, topicId: args});
            msg.reply.text(searchResult.currentPage[Math.floor(Math.random()* searchResult.currentPage.length)].url);
        })
    }
}

//Your api only works in home IP-adress. Change it when you code somewhere else (From: dev, To: dev)