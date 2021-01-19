const Discord = require ('discord.js');
//const { prefix, token } = require('./config.json')
const { nj_quote, sj_quote, yg_quote, hs_quote, jm_quote, th_quote, jk_quote } = require('./config.json')
const client = new Discord.Client();

const min = 1;
const max = 3;

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
    const nj = " ";

    switch (args[0]) {
        case 'namjoon':
            if (choice_rand == min) {
                nj = "./lyher/v/nj.jpg";
            }
            else if (choice_rand == 2) {
                nj = "./lytear/o/nj.jpg";
            }         
            else if (choice_rand == max) {
                nj = "./dynamite/nj.jpg";
            }

            message.channel.send(nj_quote, { files: [nj] });
            
            /*
            if (choice_rand == min) {
                message.channel.send(nj_quote, { files: ['./lyher/v/nj.jpg'] });
            }
            else if (choice_rand == max) {
                message.channel.send(nj_quote, { files: ['./lytear/o/nj.jpg'] });
            } */
        break;
        case 'seokjin':
            if (choice_rand == min) {
                message.channel.send(sj_quote, { files: ['./lyher/v/sj.jpg'] });
            }
            else if (choice_rand == max) {
                message.channel.send(sj_quote, { files: ['./lytear/o/sj.jpg'] });
            }
        break;
        case 'yoongi':
            if (choice_rand == min) {
                message.channel.send(yg_quote, { files: ['./lyher/v/yg.jpg'] });
            }
            else if (choice_rand == max) {
                message.channel.send(yg_quote, { files: ['./lytear/o/yg.jpg'] });
            }
        break;
        case 'hoseok':
            if (choice_rand == min) {
                message.channel.send(hs_quote, { files: ['./lyher/v/hs.jpg'] });
            }
            else if (choice_rand == max) {
                message.channel.send(hs_quote, { files: ['./lytear/o/hs.jpg'] });
            }
        break;
        case 'jimin':
            if (choice_rand == min) {
                message.channel.send(jm_quote, { files: ['./lyher/v/jm.jpg'] });
            }
            else if (choice_rand == max) {
                message.channel.send(jm_quote, { files: ['./lytear/o/jm.jpg'] });
            }
        break;
        case 'taehyung':
            if (choice_rand == min) {
                message.channel.send(th_quote, { files: ['./lyher/v/th.jpg'] });
            }
            else if (choice_rand == max) {
                message.channel.send(th_quote, { files: ['./lytear/o/th.jpg'] });
            }
        break;
        case 'jungkook':
            if (choice_rand == min) {
                message.channel.send(jk_quote, { files: ['./lyher/v/jk.jpg'] });
            }
            else if (choice_rand == max) {
                message.channel.send(jk_quote, { files: ['./lytear/o/jk.jpg'] });
            }
        break;
    }
})

client.login(process.env.token); //heroku will pass information