module.exports = {
	name: 'botinfo',
	description: 'general bot info',
	execute(message, args) {
		message.channel.send('This is a bot dedicated to near real-time status of the SuperMaxxii Minecraft server. \nIt updates about every **3-5 minutes**.');
	},
};
