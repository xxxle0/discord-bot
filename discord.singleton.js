const Discord = require('discord.js');

class DiscordClass {
    constructor() {
        this.client = null;
        this.genClient = this.genClient.bind(this);
        this.genClient();
    }
    genClient(){
        this.client = new Discord.Client();
    }
    get Client() {
        if (this.client) {
            return this.client
        } else {
            this.client = new Discord.Client();
            return this.client;
        }
    };
}

module.exports = new DiscordClass();