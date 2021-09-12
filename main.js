const Discord = require('discord.js');

const client =  new Discord.Client();

client.once('ready', () => {
    console.log('TigerTool is online!')
});

// This needs to be at the end of the file
client.login('ODg2NzE0OTIzNzIyMzU4Nzg1.YT5noA.U6CjFqP1189K1BU_CXnxjycDwsg');