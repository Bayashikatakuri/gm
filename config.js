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
global.userImages = process.env.USER_IMAGES || "./lib/Naruto.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUNsaDdnMWNNeE5WNnFCejcvRnZVOWpzbks4MXlVZExCeFB4ZGRvQlptZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmdUdEd1bUkycElmTE5vbUxubmdISlNjeTFiYzY5a1U2ZXd2QkVLeThIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUE9oQ1lheFd3S3VOV2REY0QwUzV2Q3g4K2hyemRmTUQvRFFXWHBKa1hZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyeUZBa3huMVFNMExYWEJHMXpXd2hobmRzS2drcnMrZ1Flc1d0WjZEWGxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlOWFhZbGVBbTZpK0lGa3dwK2taQTNzRyttWEhRN2pRQ0ZiWER0aXBRWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdBTDJ5ZnZkeFZQdUZWMGZRNG1LbjhvV3F6VFN4eE5GRGlHM3dkalJWMGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0loRmdzMlMxTjFEV04zSEdKQVNGM2tpYUk5OUFBSzAvQ1RwQnJab0Vrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWpydk0yQnBrZFR0TWVKaU5rWVlENDl3ZDR2ejhSWFFZYzdEdUdFZXpXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllRZHpNenFNZHExQlEvWDFQVGZISFpNU2l6NmJkYU5jRk5IbjV0VzMwWXJXNnF6bFhBKzdiMExoU3JxeS9jWGo2K2w3NVovTnZEMnloVmJNckZBOURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6IkE5dUpyd1pkYVEwazlpNzRBUUtMOGphNnZyVy9JWHJEcGxqZkhHZjAxb0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc3NDgyNTU4NDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDJFMDgyRDlCREJFMUIzMzFBNkUzOUJFNDc5MjRBOEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTk4OTk5Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc3NDgyNTU4NDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUM5MEJBMTk1QTAwMTZBMDE0QTM5NDI0MDNDNzlDMzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTk4OTk5N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidFBoRExnRllTN2VGam1wNkVwSkYwdyIsInBob25lSWQiOiJhZDBkMzYzMy1kODE1LTRhNzMtYjk2My04NmJjNGM0NGQ0MjkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEJLbWFsdExCeFhycDdEQmlyaWl3MVFoVlc4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PNjJKeGhvSlFRSTBwZ3BoWWRvZGNuSDBGbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWU1dGSkoyOSIsIm1lIjp7ImlkIjoiMjc3NDgyNTU4NDg6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+QmF5YXNoaSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm1haGNVSEVONklncmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNERsWDRGWVhZM3I1WW9oblRtSnNzRmkyQ2plSktzbk1uckVOQ3o3TDhpND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYmxpbjBERzdXMW01K1VRdDMwdEk3ellkL1RxRzJOOVFtOExPNHVwUDhXRWpDdlVGZHVmWE5kRmxRYU9FUUEza2lzdzcwYmxZRVdPcUFub2NKYUNmRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InA2bEgwU2VhWXUrQ0U1d2tGcFdaUXNFNHkzeCt1OU1vMWg4Wk5UdEdGR3VaQXE5ZURpeVlXK016K2tMbnZyS3lHemFldVJBREhWSkRjMjg3T0lURENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3NDgyNTU4NDg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlQTVWK0JXRjJONitXS0laMDVpYkxCWXRnbzNpU3JKeko2eERRcyt5L0l1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1OTg5OTk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJ0QiJ9"
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
