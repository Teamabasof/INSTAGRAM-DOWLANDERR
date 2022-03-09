const { Telegraf, Markup } = require('telegraf');
const save = require('instagram-save');
const bot = new Telegraf(process.env.token);
var path = require('path');
const fs = require('fs-extra');
var prefix = "/";
var dir = './anime';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true});
}

bot.start((ctx) => ctx.reply("Hai "+ctx.from.username+" Aku adalah bot untuk mendownload video/photo dari instagram"));
bot.help((ctx) => ctx.reply('Silahkan kirim linknya'));

bot.on('text', (ctx) => {
ctx.reply("Mendownload")
let link = ctx.message.text;
if (link.startsWith("https://www.instagram.com/")){save(`${link}`, 'anime/').then(res => {
if (path.extname(`anime/${res.file}`) === ".jpg"){
    ctx.replyWithPhoto({ source: `${res.file}`} , {caption: '@igbijabot'});
    })
    };
    if (path.extname(`anime/${res.file}`) === ".mp4"){
        ctx.replyWithVideo({ source: `${res.file}`}, {caption: '@igbijabot' });
            })
            };
}
);
} else {
    ctx.reply("Link tidak valid")
}

})

bot.launch();
