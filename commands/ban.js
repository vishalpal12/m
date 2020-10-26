const { Message } = require("discord.js");

module.exports = {
     name:'ban_user',
     description: "Check And Reply To The User Whether User Has Permissions To Ban Users",
     execute(message, args){
         
        let role = message.guild.roles.cache.find(r => r.name === "Owner");
         
        if(message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send({
                embed:{
                    color:"GREEN",
                    description:`You Have The Permission To Ban Members`
                }
            });
        }
        else{
            message.channel.send({
                embed:{
                    color:"RED",
                    description:`You **DONT** Have The Permission To Ban Members`
                }
            });
        }
     }
}