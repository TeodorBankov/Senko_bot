const redditFetch = require('reddit-fetch');

module.exports = {
    async run(bot) {
        bot.on(/^\/reddit(@Senko_kitsune_bot)? (.+)/, async (msg, props) => {
            const args = props.match[0].split(' ');
            redditFetch({
                subreddit: args[1],
                sort: 'hot',
                allowNSFW: true,
                allowCrossPost: true
            }).then(post => {
                console.log("/reddit command executed: "+post.url);
                msg.reply.photo(post.url);
            }).catch((e) => {
                msg.reply.text("You probably entered a wrong subreddit");
            });
        })
    }
};
