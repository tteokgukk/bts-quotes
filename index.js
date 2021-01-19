const Discord = require ('discord.js');
//const { prefix, token } = require('./config.json')
const { nj_quote, sj_quote, yg_quote, hs_quote, jm_quote, th_quote, jk_quote } = require('./config.json')
const client = new Discord.Client();

const prefix = '&';

client.on('ready', () => {
    console.log('Ready! Bot is online :)');
    client.user.setActivity('Love yourself ❤')
});

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'namjoon':
            message.channel.send(nj_quote, { files: ['./pictures/nj_lyher.jpg'] });
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
            message.channel.send('test please fucking work pt2', { files: ['./pictures/jm_lyher.jpg'] });
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