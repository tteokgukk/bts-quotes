const Discord = require ('discord.js');
//const { prefix, token } = require('./config.json')
const { quote8, quote9, quote10, quote11, quote12, quote13, quote14, quote15, quote16 } = require('./config.json')
const { quote1, quote2, quote3, quote4, quote5, quote6, quote7 } = require('./config.json')
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
    const choice_quote = getRandomIntInclusive (1, 16);
    var bts = " ";
    var quote = " ";

    if (choice_quote == 1) {
        quote = quote1;
    }
    else if (choice_quote == 2) {
        quote = quote2;
    }
    else if (choice_quote == 3) {
        quote = quote3;
    }
    else if (choice_quote == 4) {
        quote = quote4;
    }
    else if (choice_quote == 5) {
        quote = quote5;
    }
    else if (choice_quote == 6) {
        quote = quote6;
    }
    else if (choice_quote == 7) {
        quote = quote7;
    }
    else if (choice_quote == 8) {
        quote = quote8;
    }
    else if (choice_quote == 9) {
        quote = quote9;
    }
    else if (choice_quote == 10) {
        quote = quote10;
    }
    else if (choice_quote == 11) {
        quote = quote11;
    }
    else if (choice_quote == 12) {
        quote = quote12;
    }
    else if (choice_quote == 13) {
        quote = quote13;
    }
    else if (choice_quote == 14) {
        quote = quote14;
    }
    else if (choice_quote == 15) {
        quote = quote15;
    }
    else if (choice_quote == 16) {
        quote = quote16;
    }

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

            message.channel.send(quote, { files: [bts] });
  
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

            message.channel.send(quote, { files: [bts] });
  
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

            message.channel.send(quote, { files: [bts] });
  
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

            message.channel.send(quote, { files: [bts] });
  
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

            message.channel.send(quote, { files: [bts] });

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

            message.channel.send(quote, { files: [bts] });
  
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

            message.channel.send(quote, { files: [bts] });
  
        break;
    }
})

client.login(process.env.token); //heroku will pass information