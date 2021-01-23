const redditFetch = require('reddit-fetch');

module.exports = {
    async run(bot) {
        bot.on(/^\/reddit (.+)$/, async (msg, props) => {
            const args = props.match[1].split(' ');
            let url = await redditFetch({
                subreddit: args[0],
                sort: 'hot',
                allowNSFW: true,
                allowCrossPost: true,

            }).then(post => post.url)
            msg.reply.photo(url);
        })

    }
};
