# Senko_bot
This is an open source bot, which can do a variety of things, like:

1. Provide with media from nekos.life
2. Search and send media from a given site in chat
3. Search and provide media from subreddit from reddit.com

## Installation
To install and run Senko_bot, you must firstly create a bot from Botfather in Telegram and aquire the token, then:

```bash
sudo apt install node && npm
cd Senko_bot
npm i 
```

In the index.js file, you must replace the (INSERT YOUR BOT TOKEN HERE) with your token

```javascript
const bot = new telebot(INSERT YOUR BOT TOKEN HERE);
```

Next, in every command file, you havbe to replace the originals Senko_bot tag with yours

```javascript
bot.on(/^\/help(@Senko_kitsune_bot)?/, async (msg) => {
//replace @Senko_kitsune_bot with your bots username
```

## Run

Command for running the bot:

```bash
cd Senko_bot
node .
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License 
MIT
