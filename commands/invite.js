const { Message } = require('discord.js');

module.exports = {
   name:'invite',
   description:"Invite ModBot To Another Server",
   execute(message, args){
       message.channel.send({
       embed:{
           color:"GREEN",
           description:"Invite Me To Another Server - https://discord.com/api/oauth2/authorize?client_id=769794394471006218&permissions=8&scope=bot"
       }
       });
   }
}
