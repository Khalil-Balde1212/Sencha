const {SlashCommandBuilder} = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('evec')
        .setDescription('Oh you know')
    ,
    async execute(interaction) {
        let evecFiles = fs.readdirSync('./assets').filter(file => file.startsWith('evec'));
        
        let file = 'assets\\\\' + evecFiles[Math.floor(Math.random() * evecFiles.length)]
        return await interaction.reply({ files: [file] });
    },
};