// handler 2
// handles text input

const { reply, label } = require("../replies/handler.js");
const { db } = require("../db.js");

module.exports = async (interaction, id) => {
	console.log("handler 2 initiated");

	if (id[1] == "0") return interaction.createModal(reply(interaction.user)(id));
	else if (id[1] == "1") {
		await interaction.deferUpdate();

		const input = interaction.data.components
			.map((row) => {
				row = row.components[0];
				return { [row.customID]: row.value };
			})
			.reduce((prev, cur) => {
				return { ...prev, ...cur };
			}, {});

		const choices = await db.hmget(`res/${interaction.user.id}`, ["1/1", "1/2/0"]);
		db.hmset(`res/${interaction.user.id}`, input);

		return interaction.editOriginal(
			reply(interaction.user, [...choices.map((choice) => label(choice)), ...Object.values(input)])(
				id
			)
		);
	} else if (id[1] == "2" && id[2] == "0") {
		await interaction.deferUpdate();

		const limit = await db.get(`limit/${interaction.user.id}`);
		if (limit == "e1") id = [limit];
		else db.setex(`limit/${interaction.user.id}`, 604800, "e1");

		return interaction.editOriginal(reply(interaction.user)(id));
	} else if (id[1] == "2" && id[2] == "1") {
		await interaction.deferUpdate();

		db.del([`res/${interaction.user.id}`]);

		return interaction.deleteOriginal();
	}
};
