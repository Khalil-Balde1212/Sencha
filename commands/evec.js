const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('evec')
        .setDescription('Oh you know')
    ,
    async execute(interaction) {
        const user = interaction.options.getUser('user')
        let num = Math.floor(Math.random() * 7) + 1
        let file
        switch (num) {
            case (1):
                file = "./assets/evec1.png"
                break
            case (2):
                file = "./assets/evec2.png"
                break
            case (3):
                file = "./assets/evec3.png"
                break
            case (4):
                file = "./assets/evec4.png"
                break
            case (5):
                file = "./assets/evec5.png"
                break
            case (6):
                file = "./assets/evec6.png"
                break
            case (7):
                file = "./assets/evec7.png"
                break
            default:
                file = "./assets/evec1.png"
        }
        return await interaction.reply({ files: [file] });
    },
};