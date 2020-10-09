const Discord = require("discord.js")
const levelFile = require("Discord_Bot_YT\data/levels.json")

module.exports.run = async (bot, message, args) => {
    
        var userID = message.author.id;
        
        if (!levelFile[userID]) {
            var level0Embed = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .addField("Level", "0")
                .setFooter("CheeseDevelopment")
                .setTimestamp()
            message.channel.send(level0Embed)
        }

        var levelUser = levelFile[userID].level

        var levelEmbed = new Discord.MessageEmbed()

            .setColor("YELLOW")
            .addField("Level", levelUser)
            .setTimestamp()
            .setFooter("CheeseDevelopment")

        message.channel.send(levelEmbed)
}

module.exports.help = {
    name: "level",
    description: "hiermee kan je zien welk level je bent!"
}