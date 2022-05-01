const Discord = require("discord.js");
function debugLog(content) { console.log(`[${new Date().toDateString()} DEBUG] ${content}`); }
require('dotenv').config()
const prefix = process.env.PREFIX;

module.exports = {
    name: 'ping',
    aliases: ["uptime", "latency"],
    run: async (bot, message, args) => {
        function msToTime(ms) {
            let seconds = (ms / 1000).toFixed(1);
            let minutes = (ms / (1000 * 60)).toFixed(1);
            let hours = (ms / (1000 * 60 * 60)).toFixed(1);
            let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
            if (seconds < 60) return seconds + " seconds";
            else if (minutes < 60) return minutes + " minutes";
            else if (hours < 24) return hours + " hours";
            else return days + " days"
        }
        const embed = new Discord.MessageEmbed()
            .setTitle('Pong! 🏓')
            .setDescription(`Uptime is \`${msToTime(bot.uptime)}\`\nLatency is \`${Date.now() - message.createdTimestamp}ms\`\nAPI Latency is \`${Math.round(bot.ws.ping)}ms\``)
            .setTimestamp()
        message.reply({ embeds: [embed] });
    }
}
