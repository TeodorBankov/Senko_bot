module.exports = {
    async run(bot) {
        bot.on(/^\/help(@Senko_kitsune_bot)?/, async (msg) => {
            console.log("/help command executed");
            msg.reply.text(    
                "/start - Start chatting with me!\n/neko - display a random NSFW neko! (will add sfw later)\n/booru - Search a variety of sites for sauce\n(Usage: /booru <site> <tag> <number of pictures to send>)\n/help - Display this message\n/reddit - Get a random image from a chosen subreddit\nUsage - /reddit <subreddit>"
            );
        });
    },
}