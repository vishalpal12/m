const { Message } = require("discord.js");

module.exports = {
    name:'help',
    description:"execute all help commands",
    execute(message, args){
        message.channel.send({
            embed:{
                color:"GREEN",
                description:"`1. ?kick_user - The Bot Checks All The Roles In The Server And Tells The Users Whether User Can Kick A Member.\n 2. ?ban_user - The Bot Checks All The Roles In The Server And Tells The Users Whether User Can Ban A Member.\n 3. ?kick <user name with @> <reason for kick> - Bot Will Kick The User And Give The Reason For Kicking.\n 4. ?ban <user name with @> <reason for ban> - Bot Will Ban The User And Give The Reason For Banning.\n`"
            }
        });
    }
}