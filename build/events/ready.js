
/*  Chappie Bot @ 2022 */

module.exports = (bot, client, message) => {

    // Requirements
    require('dotenv').config()
    const Discord = require('discord.js');
    // Variables & Functions
    let guild = bot.guilds.cache.get.id,
        env = process.env,
        prefix = env.PREFIX;
    function debugLog(content) { console.log(`[${new Date().toDateString()} DEBUG] ${content}`); }
    // Startup
    function updateStatus() {
        const //:
            statusActivities = [{ name: `hello-world.exe`, type: 'PLAYING' }, { name: `bootloader.exe`, type: 'PLAYING' }],
            newActivity = statusActivities[Math.floor(Math.random() * statusActivities.length)];
        bot.user.setActivity(newActivity.name, { type: newActivity.type });
    }
    setInterval(() => {
        updateStatus()
    }, 120000); updateStatus(); // Update status every 2 minutes, and on startup
    console.log(`\n---\nLogged in as ${bot.user.tag}!\n`);

    /* 
    Custom Event Modules:
    */
    bot.on('messageCreate', message => {
        if (message.author.bot) return;
        if (message.content === `<@${bot.user.id}>`) {
            const embed = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true }) })
                .setDescription(`**Need general support?** :speech_balloon:\nJoin the [Discord server](https://discord.gg/dP3MuBATGc).\n\n**Want to suggest something?** :bulb:\nJoin the [Discord server](https://discord.gg/dP3MuBATGc).\n\n**Want to report a bug?** :bug: \nCreate new issue on [GitHub](https://github.com/brendanprice2003/Chappie/issues).\n\n**Want to invite the bot?** :bug: \n Click to [add to your server](https://github.com/brendanprice2003/Chappie/issues).`)
                .setTimestamp()
                .setFooter({ text: bot.user.username, iconUrl: bot.user.avatarURL({ dynamic: true }) });
            message.reply({ embeds: [embed] });
        }
    })
    /*
    END Custom Event Modules
    */
}