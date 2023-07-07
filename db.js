const Redis = require("ioredis");
const db = new Redis(process.env.url);

db.on("error", (error) => console.log("Redis error", error));
db.on("ready", async () => console.log("connected to Redis as", await db.client("info")));

module.exports = { db };