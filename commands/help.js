module.exports = {
    async run(bot) {
        bot.on('/help', async (msg) => {
            msg.reply.text(
                "/start - Start chatting with me!\n/neko - display a random NSFW neko! (will add sfw later)\n/booru - Search a variety of sites for sauce\n(Usage: /booru <site> <tag> <number of pictures to send>)\n/help - Display this message"
            );
        });
    },
}