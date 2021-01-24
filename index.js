require('dotenv').config();
const fs = require('fs');
const telebot = require('telebot');
const bot = new telebot(process.env.TOKEN);

fs.readdir("commands", (_, files) => {
    let commandFiles = files.filter(f => f.endsWith(".js"));
    commandFiles.forEach(commandFile => {
        let command = require(__dirname + "/commands/" + commandFile);
        try {
            command.run(bot);
        }
        catch (e) {console.error(e)}
    })
});



bot.start();