const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "m?";

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
      console.log('Bot Is Online');
    client.user.setActivity('m?help', {type: "PLAYING"}).catch(console.error);
});


client.on('message', async message=>{
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;

        if(command === "kick_user"){
            client.commands.get('kick_user').execute(message, args);
        }
        else if(command === "ban_user"){
            client.commands.get('ban_user').execute(message, args);
        }
        else if(command === "help"){
            client.commands.get('help').execute(message, args);
        }

        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
 });

client.login("NzY5Nzk0Mzk0NDcxMDA2MjE4.X5UM5Q.Eb4-8DR4PaFdDmEJd-8NE-iYiC0");
