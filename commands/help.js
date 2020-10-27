const { Message } = require("discord.js");

module.exports = {
    name:'help',
    description:"execute all help commands",
    execute(message, args){
        message.channel.send({
            embed:{
                color:"GREEN",
                description:"`1. m?kick_user - The Bot Checks All The Roles In The Server And Tells The Users Whether User Can Kick A Member.\n 2. m?ban_user - The Bot Checks All The Roles In The Server And Tells The Users Whether User Can Ban A Member.\n 3. m?kick <user name with @> <reason for kick> - Bot Will Kick The User And Give The Reason For Kicking.\n 4. m?ban <user name with @> <reason for ban> - Bot Will Ban The User And Give The Reason For Banning.\n 5. m?invite - Invite This Bot To Any Server You Want.\n 6. m?help - Get Alll The Commands Used In The Bot.\n`"
            }
        });
    }
}
