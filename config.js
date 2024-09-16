//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "27747815326";
global.sudo = process.env.SUDO || "27747815326";
global.owner = process.env.OWNER_NUMBER || "27747815326";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpKOTlYUXQyTlBoczN0TVoxVFhGWW5tL3pHYjJzYmsxcitUV2Uvb0trdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1A1OWNISmxMUDFxZnJXV1BFS2NPOWJNdUJGMVRsTldKUmJWOWtPR215Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTzlQZzdQUG5WZG10M2RSU2NtYUl3ejk1NjBrQlJhNXdRbDBvNW93cVU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqRmVKVVRsSExTNXJaUnlzMVZ1TTMwdjVXU0RKbDZSMVd5M01tS1g5WlJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FajVFYVlybFRwRGh5ckNjYkRFcEhJK2lPZzY4YmxyY05RQkFreWJKMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVGT0ZVU3FqRUtGaVl4VFpXQWd6dGVzZ0MvYmdBTVl3TUpZY0Z4c21qZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBwMGpzcXpBM1FhalFibS9yY2dYRndpbU9DMG5OVHFtRFlzWXlRVUczUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dzdTc3ckVmb2VCWFNETE9qU0VETEN5SEJYSjhKeVpLejVzMTI3OGhVUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFrL1N3QlRVVG42ZG5JL1Z5WCthZ0xNT1F3TTVhbUh5RTJmRTlYOWIxa1lOUWpFWTFBWTFVa3hLcnlSZk1HSm96b2kxRGFmRUVueEU4cmREREdIdWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJkVkoyb0xJQitkZFNqb0wwbFc3UVNMTUQvSGVnc041clhlbWlqdXRHZ0U0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLdHdyWnN4Z1JPLVU0amtJTnh3bnBBIiwicGhvbmVJZCI6ImE2OTgwMTZhLWEzYTMtNDJkNi05YjVkLTkzYmE2ZmU4OGU0OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6UVhRQWVQVTBrc3lJWUxCNFhKVFYyK2w0Mlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTVVVEJwVUJyNXgrdW1IMHM4NGhWVjQ5ZU1jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVSNkZEMjlaIiwibWUiOnsiaWQiOiIyMzQ5MDM1NjUwMDYwOjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xENDMxb1E2dTJodHdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjkxV1lMeUVETXUrSEF6ZTU4ODZ1MGZEbEkxektGQkJUYmFhWmVWNWtieUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjAxVFFtM052MlZGWVdRZ1VRRHRSZ3pKRmtmdFVkRC80WEZXVzVOQmFJUHZxUWVlMGZWME90NXFhVnFnYlc4S3FhSEdGNExOYkVoM0xXL1UyQjVUQ0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzMG5hQ1ZVM1BWT0ZLUHNQaXZHVGlldk5lRUNyVmV3T0xFeFB4MkprbDVoWUhkYUIwb09RL3Q1d2J4U0h1UlhCNEdodWFxbWlIYk5acUl3Q01RZjZpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMzU2NTAwNjA6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZFZtQzhoQXpMdmh3TTN1ZlBPcnRIdzVTTmN5aFFRVTIybW1YbGVaRzhoIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NTEwODQwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBTaSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KATAKURI_MD™`",
  author: process.env.PACK_AUTHER || "`KATAKURI_MD",
  packname: process.env.PACK_NAME || "K A T A K U R I",
  botname: process.env.BOT_NAME || "`KATAKURI_MD",
  ownername: process.env.OWNER_NAME || "katakuri",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
