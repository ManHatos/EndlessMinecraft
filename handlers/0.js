// handler 0
// handles initial application interaction

const { reply } = require("../replies/handler.js");
const { db } = require("../db.js");

module.exports = async (interaction, id) => {
	console.log("handler 0 initiated");
	await interaction.defer(1 << 6);

	const limit = await db.get(`limit/${interaction.user.id}`);
	if (limit) id = [limit];
	else db.setex(`limit/${interaction.user.id}`, 30, "e0");

	return interaction.editOriginal(reply(interaction.user)(id));
};
