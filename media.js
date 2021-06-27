const { Telegraf, Markup } = require('telegraf')
const axios = require('axios')

const bot = new Telegraf('1869439262:AAHsFXrXfbo-iP_YTgQkMxBDWIpFcwj8Odk')

let apizeks = 'farihdzaky'
let pais = 'Tester'
let lolkey = '60005a027838865b17f21b14'

bot.command('start', (ctx) => {
  return ctx.replyWithPhoto({ url: 'https://telegra.ph/file/6e64a367f83998f5d7656.jpg' },
    {
      caption: 'Hai '+ctx.from.first_name+' Aku adalah bot untuk mendownload video/photo dari instagram/facebook, Klik tombol menu untuk mendapatkan menu.',
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('Menu', 'help'),
        Markup.button.url('Subs Channel Bot', 't.me/nekozu'),
      ])
    }
  )
})

bot.action('help', ctx => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    ctx.reply('/igdl -> untuk mendownload foto/video dari instagram\n/fbdl -> untuk mendownload video dari fesbuk')
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
        
        // })
         // }catch(e){
         // ctx.reply(`Link not found / wrong link!`)
         // }
    // }
})

bot.command('fbdl', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Kasih link yang benar, contoh: /fbdl https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/" 
        ctx.reply(message)
    } else{
        sendProses(ctx)
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
        sendLoading(ctx)
        const link = await axios.get(`http://lolhuman.herokuapp.com/api/facebook?apikey=`+lolkey+`&url=`+messager)
        const { result } = link.data
        const hasil = result.slice(0, 5)
        hasil.forEach(async(res) => {
        if(res.type == "mp4"){
            ctx.replyWithVideo({url: res.link})
        }
        })
        }catch(e){
        ctx.reply(`Link tidak ditemukan!`)
        }
    }
})

bot.launch()
