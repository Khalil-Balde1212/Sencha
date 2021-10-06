const ily = [
    "ily",
    "i love you",
]
const cute = [
    "cute",
]

const tom = [
    "tom",
    "426055267877126154",
]

const shutupEvec = [
    "Oh yea, well you have a big penis",
    "Shut up weeb",
    "I hate you Evec",
    "You have a big penis",
    "Yo shut up Evec",
]

const frickTom = [
    "Yo frick Tom",
    "I hate Tom",
    "TOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
    "Oh my god. Tom why"
]

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.author.id !== message.client.user.id) {
            const strMsg = message.content.toLowerCase()
            //compliments
            if (message.mentions.has(message.client.user)){
                if ((new RegExp(ily.join("|")).test(strMsg)) && (new RegExp(cute.join("|")).test(strMsg))){
                    message.reply('what da frick. ily most. u\'re the cutest! :flushed:')
                }
                else if (new RegExp(ily.join("|")).test(strMsg)) {
                    message.reply('ily more. :flushed:' )
                }
                else if (new RegExp(cute.join("|")).test(strMsg) ) {
                    message.reply('no u! :flushed:' )
                } else {
                    message.reply('Oh hey guys')
                }
            }
            
            
            if (Math.floor(Math.random() * 100) == 0){ //Boba when?
                message.reply("Boba when?")
            }
            else if(Math.floor(Math.random() * 20) == 0){//D&D is forever
                message.reply("\"" + message.content + "\" is temporary. D&D is forever");
            }
             //frick these guys in particular
            else if (message.author.id == "208321228660932608" && Math.floor(Math.random() * 30) == 0) { //shutup evec
                message.reply(shutupEvec[Math.floor(Math.random() * shutupEvec.length)])
            }
            else if (message.author.id == "426055267877126154" && Math.floor(Math.random() * 30) == 0) { //shutup Tom
                message.reply("Shut up Tom")
            }
            else if (new RegExp(tom.join("|")).test(strMsg) && Math.floor(Math.random() * 20) == 0) { //tom
                message.reply(frickTom[Math.floor(Math.random() * frickTom.length)])
            }
        }
    },
};