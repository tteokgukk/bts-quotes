const Discord = require ('discord.js');
//const { prefix, token } = require('./config.json')
const { nj_quote, sj_quote, yg_quote, hs_quote, jm_quote, th_quote, jk_quote } = require('./config.json')
const client = new Discord.Client();

const min = 1;
const max = 2;

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

    switch (args[0]) {
        case 'namjoon':
            //const rand = getRandomIntInclusive ();
            const rand = Math.floor(Math.random()*2);
            if (rand == 1) {
                message.channel.send(nj_quote, { files: ['./namjoon/nj_lyher.jpg'] });
            }
            else if (rand == 2) {
                message.channel.send(nj_quote, { files: ['./namjoon/nj_test.jpg'] });
            }
        break;
        case 'seokjin':
            message.channel.send(sj_quote, { files: ['./pictures/sj_lyher.jpg'] });
        break;
        case 'yoongi':
            message.channel.send(yg_quote, { files: ['./pictures/yg_lyher.jpg'] });
        break;
        case 'hoseok':
            message.channel.send(hs_quote, { files: ['./pictures/hs_lyher.jpg'] });
        break;
        case 'jimin':
            message.channel.send(jm_quote, { files: ['./pictures/jm_lyher.jpg'] });
        break;
        case 'taehyung':
            message.channel.send(th_quote, { files: ['./pictures/th_lyher.jpg'] });
        break;
        case 'jungkook':
            message.channel.send(jk_quote, { files: ['./pictures/jk_lyher.jpg'] });
        break;
    }
})

client.login(process.env.token); //heroku will pass information