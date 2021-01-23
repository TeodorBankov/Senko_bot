const Booru = require('booru');

let fetch_url = async function (site, term, limit) {
    return await Booru.search(site, term, { limit, random: true })
}

module.exports = {
    async run(bot) {
        bot.on(/^\/booru (.+)$/, async (msg, props) => {
            const args = props.match[1].split(' ');
            let urls = (await fetch_url(args[0], args[1], args[2])).posts.map(p => p.fileUrl);
            for (i of urls) {
                try {
                    setTimeout(
                        console.log(i),
                        msg.reply.photo(i), 800)
                } catch (e) { console.error(e) };
                // if (/\.swf/.test(i) || /\.webm/.test(i) || /\.gif/.test(i)) {
                //     try {
                //         msg.reply(i)
                //     } catch (e) { console.error(e) }
                // }
            }
        })
    }
};

