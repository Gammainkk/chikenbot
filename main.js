const Discord = require("discord.js")

const TOKEN = "ODIwNzEwODcwMzY2NTUyMTA0.GNcxec.l84sEQ1npD6FewkNY6h95aWO1n5BtxIV8F0GzU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi"){
        message.reply("Hello world!")
    }
})

client.login(TOKEN)