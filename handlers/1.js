// handler 1
// handles all select menus

const { reply } = require("../replies/handler.js");
const { db } = require("../db.js");

module.exports = async (interaction, id) => {
	console.log("handler 1 initiated");
	await interaction.deferUpdate();

	if (id.length > 2)
		setTimeout(() => {
			let idEnd = parseInt(id.pop());
			interaction.editOriginal(reply(interaction.user)([...id, String(++idEnd)]));
		}, 5000);

	if (interaction.data.componentType == 3) {
		db.hset(`res/${interaction.user.id}`, id.join("/"), interaction.data?.values?.raw[0]);
		db.expire(`res/${interaction.user.id}`, 604800);
	}

	db.setex(`limit/${interaction.user.id}`, 30, "e0");

	return interaction.editOriginal(reply(interaction.user)(id));
};
