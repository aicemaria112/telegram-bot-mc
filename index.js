// const Telegraf = require('telegraf')
const { Telegraf } = require('telegraf')
const bot = new Telegraf("6787866134:AAFnxGiSfa-FTL9yv_WV3AUdQYcVhGL5hyc")

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();
