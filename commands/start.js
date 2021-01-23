module.exports = {
    async run(bot) {
        bot.on("/start", async (message) => {
            message.reply.text("Hi!\nYou can use /help to see my commands :)");
        });
    },
};