module.exports = {
    async run(bot) {
        bot.on(/^\/sites(@Senko_kitsune_bot)?/, async (msg) => {
            console.log("/sites command executed");
            msg.reply.text(
                "Available sites for the /booru command are (You can use aliases too):\n\nRule34 - r34, rule34\nGelbooru - gb, gel, gelbooru\nSafebooru - sb, safe, safebooru\nTbib - tb, tbib, big\nXbooru - xb, xbooru\nRule34 paheal - pa, paheal\nDerpibooru - dp, derp, derpi, derpibooru\nRealbooru - rb, realbooru\nYande.re - yd, yand, yandere\nKonachan.net - kn, konan, knet\nKonachan.com - kc, konac, kcom\nDanbooru - db, dan, danbooru\nHypnohub - hh, hypno, hypnohub\ne926 - e9, e926\ne621 - e6, e621\n\n(The aliases are on the right of the sites, after the dash)"
            )
        })
    }
};