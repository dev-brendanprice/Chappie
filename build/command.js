const { readdirSync } = require("fs");

const ascii = require("ascii-table");
const table = new ascii().setHeading("Command", "Load status");

module.exports = (bot) => {
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith(".js"));
        //add${dir}/ after commands/ if you ever sub divide into other folders

        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            //add${dir}/ after commands/ if you ever sub divide into other folders

            if (pull.name) {
                bot.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, '❌ -> missing something??');
                continue;
            }

            if (pull.aliases && Array.isArray(pull.aliases))
                pull.aliases.forEach(aliases => bot.aliases.set(aliases, pull.name));
        }
    })
}
