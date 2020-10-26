const { Message } = require("discord.js");

module.exports = {
    name:'kick_user',
    description:"Check And Reply Whether The User Has The Permissions To Kick A User",
    execute(message, args){


        let role = message.guild.roles.cache.find(r => r.name === "Owner");

        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send({
                embed:{
                    color:"GREEN",
                    description:`You Have The Permission To Kick Members`
                }
            });
        }
        else{
            message.channel.send({
                embed:{
                    color:"RED",
                    description:`You **DONT** Have The Permission To Kick Members!`
                }
            });
        }

        //if(message.member.roles.cache.some(r => r.name === "Mod")){
            //message.channel.send('pong!');
        //}
        //else{
            //message.channel.send('You Don Have The Correct Permission. Let Me Give You The Role');
            //message.member.roles.add(role).catch(console.error);
        //}
    }
}