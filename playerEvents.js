module.exports.registerPlayerEvents = (player) => {

    player.on("error", (queue, error) => {
        console.log(`[${queue.guild.name}] Error emitted from the queue: ${error.message}`);
    });
    player.on("connectionError", (queue, error) => {
        console.log(`[${queue.guild.name}] Error emitted from the connection: ${error.message}`);
    });

    player.on("trackStart", (queue, track) => {
        queue.metadata.channel.send(`🎶 Started playing: **${track.title}** in **${queue.connection.channel.name}**!`);
    });

    player.on("trackAdd", (queue, track) => {
        queue.metadata.channel.send(`🎶 Track **${track.title}** queued!`);
    });

    player.on("botDisconnect", (queue) => {
        queue.metadata.channel.send("❌ I was manually disconnected from the voice channel, clearing queue!");
    });

    player.on("channelEmpty", (queue) => {
        queue.metadata.channel.send("❌ Nobody is in the voice channel, leaving...");
    });

    player.on("queueEnd", (queue) => {
        queue.metadata.channel.send("✅ Queue finished!");
    });

};