const structures = require("./structures");

module.exports = {
	reply: (
		user = {
			tag: "<unknown user>",
			avatarURL: () => {
				return "https://cdn.discordapp.com/attachments/1030858170156982402/1117466970925846568/98d0c252e53d05f6b250c212c9b523c8.png";
			},
		},
		data
	) => {
		return function (id) {
			console.log("replies handler executed");
			console.log(id);

			id = id.join("/");

			const response = structures(id, data);

			response.embeds = response.embeds?.map((embed, index, total) => {
				let formatted = {
					...embed,

					image: {
						url: "https://cdn.discordapp.com/attachments/821290011763671048/981153414069256192/750x1-00000000.png",
					},
					color: parseInt("2b2d31", 16),
				};

				if (index == 0)
					formatted.author = {
						name: user.tag,
						iconURL: user.avatarURL(),
					};
				if (index == total.length - 1) {
					formatted = {
						...formatted,
						footer: {
							text: "Endless Minecraft",
							iconURL:
								"https://cdn.discordapp.com/attachments/1030858170156982402/1117466970925846568/98d0c252e53d05f6b250c212c9b523c8.png",
						},
						timestamp: new Date().toISOString(),
					};
				}

				return formatted;
			});

			console.log("response generated", JSON.stringify(response));
			return response;
		};
	},
	label: (id) => {
		console.log("label handler executed");
		console.log(id);

		return structures("labels")[Array.isArray(id) ? id.join("/") : id] ?? "<unknown id>";
	},
};
