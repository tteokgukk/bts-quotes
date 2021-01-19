const Discord = require ('discord.js');
//const { prefix, token } = require('./config.json')
const { nj_quote, sj_quote, yg_quote, hs_quote, jm_quote, th_quote, jk_quote } = require('./config.json')
const client = new Discord.Client();

const min = 1;
const max = 4;

const prefix = '&';

client.on('ready', () => {
    console.log('Ready! Bot is online :)');
    client.user.setActivity('Love yourself ❤')
});


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");
    const choice_rand = getRandomIntInclusive (min, max);
    var bts = " ";

    switch (args[0]) {
        case 'namjoon':
            if (choice_rand == min) {
                bts = "./lyher/v/nj.jpg";
            }
            else if (choice_rand == 2) {
                bts = "./lytear/o/nj.jpg";
            }
            else if (choice_rand == 3) {
                bts = "./lyanswer/s/nj.jpg";
            }         
            else if (choice_rand == max) {
                bts = "./dynamite/nj.jpg";
            }

            message.channel.send(nj_quote, { files: [bts] });
  
        break;
        case 'seokjin':
            if (choice_rand == min) {
                bts = "./lyher/v/sj.jpg";
            }
            else if (choice_rand == 2) {
                bts = "./lytear/o/sj.jpg";
            }
            else if (choice_rand == 3) {
                bts = "./lyanswer/s/sj.jpg";
            }         
            else if (choice_rand == max) {
                bts = "./dynamite/sj.jpg";
            }

            message.channel.send(sj_quote, { files: [bts] });
  
        break;
        case 'yoongi':
            if (choice_rand == min) {
                bts = "./lyher/v/yg.jpg";
            }
            else if (choice_rand == 2) {
                bts = "./lytear/o/yg.jpg";
            }
            else if (choice_rand == 3) {
                bts = "./lyanswer/s/yg.jpg";
            }         
            else if (choice_rand == max) {
                bts = "./dynamite/yg.jpg";
            }

            message.channel.send(yg_quote, { files: [bts] });
  
        break;
        case 'hoseok':
            if (choice_rand == min) {
                bts = "./lyher/v/hs.jpg";
            }
            else if (choice_rand == 2) {
                bts = "./lytear/o/hs.jpg";
            }
            else if (choice_rand == 3) {
                bts = "./lyanswer/s/hs.jpg";
            }         
            else if (choice_rand == max) {
                bts = "./dynamite/hs.jpg";
            }

            message.channel.send(hs_quote, { files: [bts] });
  
        break;
        case 'jimin':
            if (choice_rand == min) {
                bts = "./lyher/v/jm.jpg";
            }
            else if (choice_rand == 2) {
                bts = "./lytear/o/jm.jpg";
            }
            else if (choice_rand == 3) {
                bts = "./lyanswer/s/jm.jpg";
            }         
            else if (choice_rand == max) {
                bts = "./dynamite/jm.jpg";
            }

            message.channel.send(jm_quote, { files: [bts] });
  
        break;
        case 'taehyung':
            if (choice_rand == min) {
                bts = "./lyher/v/th.jpg";
            }
            else if (choice_rand == 2) {
                bts = "./lytear/o/th.jpg";
            }
            else if (choice_rand == 3) {
                bts = "./lyanswer/s/th.jpg";
            }         
            else if (choice_rand == max) {
                bts = "./dynamite/th.jpg";
            }

            message.channel.send(th_quote, { files: [bts] });
  
        break;
        case 'jungkook':
            if (choice_rand == min) {
                bts = "./lyher/v/jk.jpg";
            }
            else if (choice_rand == 2) {
                bts = "./lytear/o/jk.jpg";
            }
            else if (choice_rand == 3) {
                bts = "./lyanswer/s/jk.jpg";
            }         
            else if (choice_rand == max) {
                bts = "./dynamite/jk.jpg";
            }

            message.channel.send(jk_quote, { files: [bts] });
  
        break;
    }
})

client.login(process.env.token); //heroku will pass information