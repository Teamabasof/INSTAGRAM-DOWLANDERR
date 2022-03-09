const { Telegraf, Markup } = require('telegraf');
const instagram = require("@phaticusthiccy/open-apis");
const bot = new Telegraf(process.env.token);

bot.start((ctx) => ctx.reply("Hai "+ctx.from.username+" Aku adalah bot untuk mendownload video/photo dari instagram"));
bot.help((ctx) => ctx.reply('Silahkan kirim linknya'));

bot.on('text', (ctx) => {
ctx.reply("Mendownload")
let link = ctx.message.text;
    instagram.insta_post("https://www.instagram.com/p/Ca15RMBvwiu/?utm_source=ig_web_copy_link").then(async (data) => {
    ctx.replyWithPhoto(data.post1.url)
})


bot.launch();
