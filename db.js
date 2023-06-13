process.env.url = "redis://default:11uqnjyVXvcWeWrTzHbU@containers-us-west-143.railway.app:6819";

const Redis = require("ioredis");
const db = new Redis(process.env.url);

db.on("error", (error) => console.log("Redis error", error));
db.on("ready", async () => console.log("connected to Redis as", await db.client("info")));

module.exports = { db };
