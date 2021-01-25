const redditFetch = require('reddit-fetch');

module.exports = {
    async run(bot) {
        bot.on(/^\/reddit(@Senko_kitsune_bot)? (.+)/, async (msg, props) => {
            const args = props.match[0].split(' ');
            if (!args[2]) args[2] = 1;
            if (isNaN(args[2]) || args[2] > 10 || args[2] < 1) return msg.reply.text('Invalid number (1-10)');
            for (let i = 0; i < args[2]; i++) {
                setTimeout(() => {
                    let sorts = ['hot', 'new'];
                    let rand = Math.floor(Math.random()*sorts.length)
                    redditFetch({
                        subreddit: args[1],
                        sort: sorts[rand],
                        allowNSFW: true,
                        allowCrossPost: true
                    }).then(post => {
                        console.log("/reddit command executed, "+ "sorted by: " + sorts[rand] + ', ' + post.url);
                        msg.reply.photo(post.url, { caption: post.url });
                    }).catch((e) => {
                        msg.reply.text("You probably entered a wrong subreddit");
                    });
                }, 500 * i);
            }
        })
    }
};
