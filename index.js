const fs = require('fs');
const {Client, Collection, Intents} = require('discord.js');
const {token} = require('./config.json');

const {Player} = require('discord-player');
const {registerPlayerEvents} = require("./playerEvents");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.DIRECT_MESSAGES],
    partials: ['MESSAGE', 'USER', 'REACTION']
});

client.commands = new Collection();
client.player = new Player(client);
registerPlayerEvents(client.player);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(token);