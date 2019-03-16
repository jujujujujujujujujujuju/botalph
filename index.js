const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("San Andreas RP  !help");
    console.log("le bot est co");
});

bot.login("NTU2NDIxNzUzNDMwMjEyNjA4.D25iqw.rehzckolOPuC70tnPtmLhU5EoL4");
