const owoify = require('owoify-js').default;

module.exports = {
    async run(bot) {
        bot.on(/^\/owo(@Senko_kitsune_bot)?(.+)?/, async (msg, props) => {
            const args = props.match[0].split(' ').splice(1).join(' ');
            let owoified = owoify(args);
            console.log("/owo command executed: " + owoified);
            return msg.reply.text(owoified);
        });
    }
}