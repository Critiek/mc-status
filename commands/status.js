const api = require("../server-api");

module.exports = {
	name: 'status',
	description: 'mc server status request',
	execute(message, args) {
		api.getApiResponse()
			.then(response => message.channel.send("**Online:** " + response.debug.ping + "\n**Players:** " + response.players.online + "\n**ip:** " + response.ip + ":" + response.port))
			.catch(error => console.log(error));
	},
};
