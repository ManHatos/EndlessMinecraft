process.env.token = "MTEwMjk0ODQ0ODIwODE3NTE3NQ.G6nbCc.9-BN9rr4UA7-ZJqEI60_ubbygA10pWfZcpoqRc";

const oceanic = require("oceanic.js");
const fs = require("node:fs");

// connecting to Discord gateway

const bot = new oceanic.Client({
	auth: `Bot ${process.env.token}`,
	gateway: { intents: 1 << 15 },
});

const map = new Map();
fs.readdirSync("./handlers").forEach((file) => {
	if (!file.endsWith(".js")) return;
	const fileContent = require(`./handlers/${file}`);
	map.set(file.split(".")[0], fileContent);
});

bot.connect();

bot.once("ready", () => console.log(`connected to Discord as ${bot.user.tag}`));

// interaction handler

bot.on("interactionCreate", async (interaction) => {
	console.log("------------\ninteraction received: ", JSON.stringify(interaction));
	// MESSAGE_COMPONENT || MODAL_SUBMIT
	if (interaction.type === 3 || interaction.type === 5) {
		const id = interaction.data.customID.split("/");

		if (![...map.keys()].includes(id[0].toString())) return console.log("unknown handler");
		if (id.includes("edit"))
			map
				.get("3")(interaction, id)
				.then(() => console.log("interaction ran successfully"))
				.catch((err) => console.log(`interaction error\n${err}`));
		else
			map
				.get(id[0])(interaction, id)
				.then(() => console.log("interaction ran successfully"))
				.catch((err) => console.log(`interaction error\n${err}`));
	}
});
