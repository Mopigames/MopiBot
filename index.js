const Discord = require ('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', async () =>{
  bot.user.setActivity({Je suis content});
});

bot.login(process.env.BOT_TOKEN);
