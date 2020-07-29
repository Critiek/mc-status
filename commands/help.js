module.exports = {
	name: 'help',
	description: 'help',
	execute(message, args) {
		message.channel.send('**prefix:** mc/ \n\n **help** - what you are seeing right now \n **status** - general info \n **players** - list of players by username \n **ip** - its 43.245.161.226:26785, but use it if you want \n **botinfo** - general bot info');
	},
};
