var Discord = require('discord.js')
var rblx = require('roblox.js')

const Events = Discord.Events;
const client = new Discord.Client;
client.on('ready',()>= {
  console.log('i am ready');
});
rbx.login("Borazon_Bot","botnamednut")
client.on('message',message => {

if(message.content === ":promote")
let mod = message.guild.roles.find('name',"Trainer")
if(message.member.roles.has(mod.id)) {
  let user = args.slice(1).join(' ');
const m = await message.channel.send('Promoting..');
const id = rblx.getIdFromUsername(user);
rblx.promote(2968801,id);
m.edit('User should be ranked, if not, please DM <@329306122731257857>');
} else {
  return message.reply("You do not have permission to use that command, role required: Trainer");
}
};

});
client.on('message',message => {

if(message.content === ":demote")
let mod = message.guild.roles.find('name',"Trainer")
if(message.member.roles.has(mod.id)) {
  let user = args.slice(1).join(' ');
const m = await message.channel.send('Demoting..');
const id = rblx.getIdFromUsername(user);
rblx.demote(2968801,id);
m.edit('User should be ranked, if not, please DM <@329306122731257857>');
} else {
  return message.reply("You do not have permission to use that command, role required: Trainer");
}
};

});
client.login(process.env.bottoken);
