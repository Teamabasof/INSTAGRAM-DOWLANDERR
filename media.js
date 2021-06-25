const { Telegraf, Markup } = require('telegraf')
const axios = require('axios')

const bot = new Telegraf('1869439262:AAHsFXrXfbo-iP_YTgQkMxBDWIpFcwj8Odk')

let apizeks = 'farihdzaky'
let xteam = '989d4c726785d39e'
let pais = 'Tester'

bot.command('start', (ctx) => {
  return ctx.replyWithPhoto({ url: 'https://telegra.ph/file/6e64a367f83998f5d7656.jpg' },
    {
      caption: 'Hai '+ctx.from.first_name+' Aku adalah bot untuk mendownload video/photo dari instagram/facebook atau juga twitter, Klik tombol menu untuk mendapatkan menu.',
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('Menu', 'help'),
        Markup.button.url('Subs Channel Bot', 't.me/nekozu'),
      ])
    }
  )
})

bot.action('help', ctx => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    ctx.reply('/igdl -> untuk mendownload foto/video dari instagram\n/twtdl -> mendownload foto/video dari twitter\n/fbdl -> untuk mendownload video dari fesbuk')
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

bot.command('igdl', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Kasih link yang benar!, Contoh: /igdl https://www.instagram.com/p/CAAZ1VcA2OA " 
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        // console.log(messager)
        // try{
        const link = await axios.get('https://pencarikode.xyz/api/ig?url='+messager+'&apikey='+pais)
        const result = link.data.result.data
        // const hasill = result
        // console.log(result)
        result.forEach((res) => {
            
        // console.log(hasil)
        if(res.type == 'image'){
        ctx.replyWithPhoto({url: res.data})

        } else {
            console.log('video')
            ctx.replyWithVideo({url: res.data})
        }
        
        })
        // }catch(e){
        // ctx.reply(`Link not found / wrong link!`)
        // }
    }
})

bot.command('twtdl', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Please enter link, for example: /instagram https://www.instagram.com/p/CLSIkIOh0ad/?utm_source=ig_web_copy_link" 
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        // console.log(messager)
        // try{
        const link = await axios.get('https://api.xteam.xyz/dl/twitter?url='+messager+'&APIKEY='+xteam)
        const result = link.data.result.video_url
        // const hasill = result
        // console.log(result)
        result.forEach((res) => {
            
        // console.log(hasil)
        if(res.type == 'image'){
        ctx.replyWithPhoto({url: res.data})

        } else {
            console.log('video')
            ctx.replyWithVideo({url: res.data})
        }
        
        })
        // }catch(e){
        // ctx.reply(`Link not found / wrong link!`)
        // }
    }
})

bot.launch()
