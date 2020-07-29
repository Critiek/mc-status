module.exports = {
	name: 'ping',
	description: 'Pings the bot',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
