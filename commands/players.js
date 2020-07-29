const api = require("../server-api");

module.exports = {
	name: 'players',
	description: 'returns list of players',
	execute(message, args) {
		api.getApiResponse()
			.then(response => message.channel.send("**Players by Username:** " + response.players.list))
			.catch(error => console.log(error));
	},
};
