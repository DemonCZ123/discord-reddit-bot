const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require('axios');
require("dotenv").config();


client.once('ready', () => {
	console.log('Ready!');
});

const prefix = "!";
const time = 15000;

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content.startsWith(prefix + "help")){
        const helpMenu = new Discord.MessageEmbed()
            .setTitle("Potřebuješ pomoc?")
            .setColor("#bd7739")
            .setDescription("**Aktuální příkazy:** \n !anime - Náhodný anime post \n !meme - Náhodný anime meme post \n !catgirl - Náhodná cat girl fotka \n !hentai - Náhodná hentai fotka \n !ph - Náhodná PH fotka \n !nekopara - Náhodný post ze hry Nekopara \n !manga - Náhodný manga post \n !gif - Náhodný gif post")
            .setTimestamp()
            .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
        message.channel.send(helpMenu);
    }

    if (message.content.startsWith(prefix + "ph")) {
        const RedditLoadingEmbed = new Discord.MessageEmbed()
                .setTitle("Štavnatý matroš!")
                .setColor("#bd7739")
                .setDescription("Čekejte... Probíhá získávání fotky.")
                .setTimestamp()
                .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                message.channel.send(RedditLoadingEmbed)
                .then((msg) => {
                    axios.get("http://fake.pinktube.eu:9090/reddit/random/pornhub/?only=image")
                    .then((api) => {
                        const data = api.data;
                        const RandomEmbed = new Discord.MessageEmbed()
                        .setTitle("Štavnatý matroš!")
                        .setColor("#bd7739")
                        .setURL(data.reddit_link)
                        .setDescription(data.title + "\n\nAutor/ka: " + data.author + " počet upvotů: " + data.upvotes)
                        .setImage(data.url)
                        .setTimestamp()
                        .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                        msg.edit(RandomEmbed);
                        msg.delete({ timeout: 3600000}).catch(error => {
                            console.log('Didnt find the message!');
                            console.log('The message was not deleted!');
                        });
                    })
                })
                
	}

	if (message.content.startsWith(prefix + "anime")) {
        const RedditLoadingEmbed = new Discord.MessageEmbed()
                .setTitle("Náhodný post anime!")
                .setColor("#bd7739")
                .setDescription("Čekejte... Probíhá získávání fotky.")
                .setTimestamp()
                .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                message.channel.send(RedditLoadingEmbed)
                .then((msg) => {
                    axios.get("http://fake.pinktube.eu:9090/reddit/random/anime/?only=image")
                    .then((api) => {
                        const data = api.data;
                        const RandomEmbed = new Discord.MessageEmbed()
                        .setTitle("Náhodný post!")
                        .setColor("#bd7739")
                        .setURL(data.reddit_link)
                        .setDescription(data.title + "\n\nAutor/ka: " + data.author + " počet upvotů: " + data.upvotes)
                        .setImage(data.url)
                        .setTimestamp()
                        .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                        msg.edit(RandomEmbed);
                        msg.delete({ timeout: 3600000}).catch(error => {
                            console.log('Didnt find the message!');
                            console.log('The message was not deleted!');
                        });
                    })
                })
	}

    if (message.content.startsWith(prefix + "hentai")) {
        const RedditLoadingEmbed = new Discord.MessageEmbed()
                .setTitle("Náhodný post hentai!")
                .setColor("#bd7739")
                .setDescription("Čekejte... Probíhá získávání fotky.")
                .setTimestamp()
                .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                message.channel.send(RedditLoadingEmbed)
                .then((message) => {
                    axios.get("http://fake.pinktube.eu:9090/reddit/random/hentai/?only=image")
                    .then((api) => {
                        const data = api.data;
                        const RandomEmbed = new Discord.MessageEmbed()
                        .setTitle("Náhodný post!")
                        .setColor("#bd7739")
                        .setURL(data.reddit_link)
                        .setDescription(data.title + "\n\nAutor/ka: " + data.author + " počet upvotů: " + data.upvotes)
                        .setImage(data.url)
                        .setTimestamp()
                        .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                        message.edit(RandomEmbed);
                        message.delete({ timeout: 3600000}).catch(error => {
                            console.log('Didnt find the message!');
                            console.log('The message was not deleted!');
                        });

                        message.react("1️⃣");
                        message.react("2️⃣");
                        message.react("3️⃣");
                        message.react("4️⃣");
                        message.react("5️⃣");

                        var points = 0;
                        var users = 0;

                        const filter = (reaction, user) => {
                            return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'].includes(reaction.emoji.name) && user.id !== client.user.id;
                        };
                        
                        const collector = message.createReactionCollector(filter, { time: 30000, dispose: true });
                        
                        collector.on('collect', (reaction, user) => {
                            if (reaction.emoji.name === "1️⃣") {
                                points += 1;
                                users++;
                            } else if (reaction.emoji.name === "2️⃣") {
                                points += 2;
                                users++;
                            } else if (reaction.emoji.name === "3️⃣") {
                                points += 3;
                                users++;
                            } else if (reaction.emoji.name === "4️⃣") {
                                points += 4;
                                users++;
                            } else if (reaction.emoji.name === "5️⃣") {
                                points += 5;
                                users++;
                            }
                        });

                        collector.on('remove', (reaction, user) => {
                            if (reaction.emoji.name === "1️⃣") {
                                points -= 1;
                                users--;
                            } else if (reaction.emoji.name === "2️⃣") {
                                points -= 2;
                                users--;
                            } else if (reaction.emoji.name === "3️⃣") {
                                points -= 3;
                                users--;
                            } else if (reaction.emoji.name === "4️⃣") {
                                points -= 4;
                                users--;
                            } else if (reaction.emoji.name === "5️⃣") {
                                points -= 5;
                                users--;
                            }
                        });
                        
                        collector.on('end', collected => {
                            if (points > 0) {
                                message.reply("Výsledné hodnocení: " + points/users);
                            }else {
                                message.reply("Nikdo nehlasoval!");
                            }
                        });


                    })
                })
	}

    if (message.content.startsWith(prefix + "meme")) {
        const RedditLoadingEmbed = new Discord.MessageEmbed()
                .setTitle("Náhodný post anime memes!")
                .setColor("#bd7739")
                .setDescription("Čekejte... Probíhá získávání fotky.")
                .setTimestamp()
                .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                message.channel.send(RedditLoadingEmbed)
                .then((msg) => {
                    axios.get("http://fake.pinktube.eu:9090/reddit/random/animemes/?only=image")
                    .then((api) => {
                        const data = api.data;
                        const RandomEmbed = new Discord.MessageEmbed()
                        .setTitle("Náhodný post!")
                        .setColor("#bd7739")
                        .setURL(data.reddit_link)
                        .setDescription(data.title + "\n\nAutor/ka: " + data.author + " počet upvotů: " + data.upvotes)
                        .setImage(data.url)
                        .setTimestamp()
                        .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                        msg.edit(RandomEmbed);
                        msg.delete({ timeout: 3600000}).catch(error => {
                            console.log('Didnt find the message!');
                            console.log('The message was not deleted!');
                        });
                    })
                })
                
	}

    if (message.content.startsWith(prefix + "catgirl")) {
        const RedditLoadingEmbed = new Discord.MessageEmbed()
                .setTitle("Náhodná kočko holka!")
                .setColor("#bd7739")
                .setDescription("Čekejte... Probíhá získávání fotky.")
                .setTimestamp()
                .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                message.channel.send(RedditLoadingEmbed)
                .then((msg) => {
                    axios.get("http://fake.pinktube.eu:9090/reddit/random/catgirls/?only=image")
                    .then((api) => {
                        const data = api.data;
                        const RandomEmbed = new Discord.MessageEmbed()
                        .setTitle("Náhodná kočko holka!")
                        .setColor("#bd7739")
                        .setURL(data.reddit_link)
                        .setDescription(data.title + "\n\nAutor/ka: " + data.author + " počet upvotů: " + data.upvotes)
                        .setImage(data.url)
                        .setTimestamp()
                        .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                        msg.edit(RandomEmbed);
                        msg.delete({ timeout: 3600000}).catch(error => {
                            console.log('Didnt find the message!');
                            console.log('The message was not deleted!');
                        });
                    })
                })
                
	}

    if (message.content.startsWith(prefix + "nekopara")) {
        const RedditLoadingEmbed = new Discord.MessageEmbed()
                .setTitle("Náhodný post z Nekopary!")
                .setColor("#bd7739")
                .setDescription("Čekejte... Probíhá získávání fotky.")
                .setTimestamp()
                .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                message.channel.send(RedditLoadingEmbed)
                .then((msg) => {
                    axios.get("http://fake.pinktube.eu:9090/reddit/random/nekoparagame/?only=image")
                    .then((api) => {
                        const data = api.data;
                        const RandomEmbed = new Discord.MessageEmbed()
                        .setTitle("Náhodný post z Nekopary!")
                        .setColor("#bd7739")
                        .setURL(data.reddit_link)
                        .setDescription(data.title + "\n\nAutor/ka: " + data.author + " počet upvotů: " + data.upvotes)
                        .setImage(data.url)
                        .setTimestamp()
                        .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                        msg.edit(RandomEmbed);
                        msg.delete({ timeout: 3600000}).catch(error => {
                            console.log('Didnt find the message!');
                            console.log('The message was not deleted!');
                        });
                    })
                })
                
	}

    if (message.content.startsWith(prefix + "manga")) {
        const RedditLoadingEmbed = new Discord.MessageEmbed()
                .setTitle("Náhodný manga post!")
                .setColor("#bd7739")
                .setDescription("Čekejte... Probíhá získávání fotky.")
                .setTimestamp()
                .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                message.channel.send(RedditLoadingEmbed)
                .then((msg) => {
                    axios.get("http://fake.pinktube.eu:9090/reddit/random/manga/?only=image")
                    .then((api) => {
                        const data = api.data;
                        const RandomEmbed = new Discord.MessageEmbed()
                        .setTitle("Náhodný manga post!")
                        .setColor("#bd7739")
                        .setURL(data.reddit_link)
                        .setDescription(data.title + "\n\nAutor/ka: " + data.author + " počet upvotů: " + data.upvotes)
                        .setImage(data.url)
                        .setTimestamp()
                        .setFooter("Příkaz zadal/a: " + message.author.tag, message.author.avatarURL());
                        msg.edit(RandomEmbed);
                        msg.delete({ timeout: 3600000}).catch(error => {
                            console.log('Didnt find the message!');
                            console.log('The message was not deleted!');
                        });
                    })
                })
                
	}
});


client.login(process.env.BOTTOKEN);
