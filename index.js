const { Telegraf, Markup } = require('telegraf');
const instagram = require("@phaticusthiccy/open-apis");
const bot = new Telegraf(process.env.token);

bot.start((ctx) => ctx.reply("selam ben Yiğit  "+ctx.from.username+" link at bakem", {
      ...Markup.inlineKeyboard([
        Markup.button.url('kral', 
           't.me/YigiTurkoglu')
      ])
     }
    ));

bot.on('text', (ctx) => {
ctx.reply("Yüklənir 📥")
let link = ctx.message.text;
    instagram.insta_post(link).then(async (data) => {
   if (data.post1.type = "mp4") {
       ctx.replyWithVideo(data.post1.url)
   
    } else {
      ctx.replyWithPhoto(data.post1.url)
    }
  })
})


bot.launch()

