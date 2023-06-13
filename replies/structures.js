const labels = {
	"1/1": "Age",
	"1/2": "Play Duration",
	"1/1/0": "13 years or younger",
	"1/1/1": "14 years to 17 years",
	"1/1/2": "18 years or older",
	"1/2/0/0": "A couple of weeks",
	"1/2/0/1": "A couple of months",
	"1/2/0/2": "About a year",
	"1/2/0/3": "Many years",
	"2/1/0": "Minecraft Username",
	"2/1/1": "Join Reason",
	"2/1/2": "Difference From Other Candidates",
};

module.exports = (id, data = Array(10).fill("<no data provided>")) => {
	console.log("structure accessed id: ", id);

	let i = 0;
	return {
		labels,
		"e0": {
			content:
				"**<:error:997099986686849134> You have recently tried submitting an application.** Please try again later.",
			flags: 1 << 2,
		},
		"e1": {
			content:
				"**<:error:997099986686849134> You have a pending submitted application.** Please try again later.",
			flags: 1 << 2,
		},
		"0": {
			embeds: [
				{
					title: "**Endless Minecraft Whitelisted Application**",
					description:
						"- You are currently applying to become a whitelisted member in Endless Minecraft Survival Multiplayer. *You will be required to answer some basic questions during this application.*\n\n- It can take up to **two weeks** to get your results — be patient and do not message a member of staff unless the two-week period is over in which you can create a general ticket.",
				},
			],
			components: [
				{
					type: 1,
					components: [
						{
							type: 2,
							style: 1,
							label: "Get Started",
							customID: "1/0",
							emoji: { name: "endlessWhite", id: "1116859934194278481" },
						},
					],
				},
			],
			flags: 1 << 6,
		},
		"1/0": {
			embeds: [
				{
					title: "How **old are you**?",
					description:
						"This is to help guarantee a more mature player-base. **Answers are not shared**.",
				},
			],
			components: [
				{
					type: 1,
					components: [
						{
							type: 3,
							placeholder: "Select Age",
							customID: "1/1",
							options: [
								{
									label: labels["1/1/0"],
									value: "1/1/0",
								},
								{
									label: labels["1/1/1"],
									value: "1/1/1",
								},
								{
									label: labels["1/1/2"],
									value: "1/1/2",
								},
							],
						},
					],
				},
			],
		},
		"1/1": {
			embeds: [
				{
					title: "Approximately, how **long** have you been **playing Minecraft** for?",
					description: "This is to help guarantee a more experienced player-base.",
				},
			],
			components: [
				{
					type: 1,
					components: [
						{
							type: 3,
							placeholder: "Select Duration",
							customID: "1/2/0",
							options: [
								{
									label: labels["1/2/0/0"],
									value: "1/2/0/0",
								},
								{
									label: labels["1/2/0/1"],
									value: "1/2/0/1",
								},
								{
									label: labels["1/2/0/2"],
									value: "1/2/0/2",
								},
								{
									label: labels["1/2/0/3"],
									value: "1/2/0/3",
								},
							],
						},
					],
				},
			],
		},
		"1/2/0": {
			embeds: [
				{
					title: "Have you **__read__ our rules and information** on how to behave within the SMP?",
					description: "If you have not read our rules and information, do so now.",
				},
			],
			components: [
				{
					type: 1,
					components: [
						{
							type: 2,
							style: 2,
							customID: "1/3",
							disabled: true,
							label: "Read above",
						},
					],
				},
			],
		},
		"1/2/1": {
			components: [
				{
					type: 1,
					components: [
						{
							type: 2,
							style: 2,
							label: "Continue",
							customID: "1/3",
							disabled: false,
						},
					],
				},
			],
		},
		"1/3": {
			embeds: [
				{
					title:
						"Do you **__agree__ to our rules and information** on how to behave within the SMP?",
					description: "If you disagree with the rules and information, go elsewhere.",
				},
			],
			components: [
				{
					type: 1,
					components: [
						{
							type: 2,
							style: 2,
							customID: "1/4/0",
							label: "Continue",
						},
					],
				},
			],
		},
		"1/4/0": {
			embeds: [
				{
					title: "**Typed Questions**",
					description:
						"- You will now need to answer some questions using **text**. By pressing the button below, a modal will open where you can enter the required information.\n\n- Due to Discord limitations, this modal will expire after **15 minutes**. Try answering as fast as possible.",
				},
			],
			components: [
				{
					type: 1,
					components: [
						{
							type: 2,
							style: 2,
							customID: "1/4",
							disabled: true,
							label: "Read above",
						},
					],
				},
			],
		},
		"1/4/1": {
			components: [
				{
					type: 1,
					components: [
						{
							type: 2,
							style: 2,
							customID: "2/0",
							label: "Open Modal",
						},
					],
				},
			],
		},
		"2/0": {
			title: "Typed Questions",
			customID: "2/1",
			components: [
				{
					type: 1,
					components: [
						{
							type: 4,
							style: 1,
							customID: "2/1/0",
							label: "Your Minecraft Username",
							minLength: 3,
							maxLength: 16,
						},
					],
				},
				{
					type: 1,
					components: [
						{
							type: 4,
							style: 2,
							customID: "2/1/1",
							label: "Why do you want to join Endless SMP?",
							placeholder: "Your response must be lengthy, grammatical and professional.",
							minLength: 50,
							maxLength: 500,
						},
					],
				},
				{
					type: 1,
					components: [
						{
							type: 4,
							style: 2,
							customID: "2/1/2",
							label: "How do you differ from other candidates?",
							placeholder: "Your response must be lengthy, grammatical and professional.",
							minLength: 50,
							maxLength: 500,
						},
					],
				},
			],
		},
		"2/1": {
			embeds: [
				{
					title: "**Check Your Responses**",
					description:
						"- Below are all your entered information. Check for any incorrect information entered and restart the application process to fix. An easier solution *may* be developed in the future.\n\n- Your data is stored within a private database for no longer than **1 week** in an **unreadable form**, after which it is permanently removed.",
				},
				{
					description: `#  Multiple Choice Questions\n\n### - ${labels["1/1"]}\n\`\`\`\n${
						data[i++]
					}\n\`\`\`\n### - ${labels["1/2"]}\n\`\`\`\n${data[i++]}\n\`\`\``,
				},
				{
					description: `# Typed Question\n\n### - ${labels["2/1/0"]}\n\`\`\`\n${
						data[i++]
					}\n\`\`\`\n### - ${labels["2/1/1"]}\n\`\`\`\n${data[i++]}\n\`\`\`\n### - ${
						labels["2/1/2"]
					}\n\`\`\`\n${data[i++]}\n\`\`\``,
				},
			],
			components: [
				{
					type: 1,
					components: [
						{
							type: 2,
							style: 1,
							label: "Submit for Review",
							customID: "2/2/0",
							emoji: { name: "endlessWhite", id: "1116859934194278481" },
						},
						{
							type: 2,
							style: 4,
							label: "Cancel",
							customID: "2/2/1",
						},
					],
				},
			],
		},
		"2/2/0": {
			embeds: [
				{
					title: "**Thank You!**",
					description:
						"- Your application has been successfully sent for review. Thank you for taking your time in applying.\n\n- It can take up to **two weeks** to get your results — be patient and do not message a member of staff unless the two-week period is over in which you can create a general ticket.\n\n- You not undo this action. Please wait for your results before submitting another application.",
				},
			],
			components: [],
		},
	}[id];
};
