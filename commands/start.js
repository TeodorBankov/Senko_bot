module.exports = {
    async run(bot) {
        bot.on(/^\/start(@Senko_kitsune_bot)?/, async (message) => {
            console.log("/start command executed");
            message.reply.text("Hi!\nYou can use /help to see my commands :)");
        });
    },
};