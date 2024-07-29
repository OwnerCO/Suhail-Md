const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jazminqntro96@gmail.com"
global.location="Lima, Peru."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Guru:Suhail18@redwings.09ylxit.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Lima";
global.github=process.env.GITHUB|| "https://github.com/OwnerCO/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/OwnerCO/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰" 


global.devs = "51978194933" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "51978194933";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_30_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzLFxuICAgICAgICA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMwLFxuICAgICAgICA3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDczLFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI4LFxuICAgICAgICA3MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm00Uk9PMVIvOGtnR0RKR3p4ME0xNmhwNThJK0FGV0tPRUVTTWt6WHQraVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTE5NzgxOTQ5MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNGNUYzODA5QkIzOEQzQjMyMDA1NTU4MTM0MDNGRjBEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI5NTg0MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUxOTc4MTk0OTMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNDkzMkQ2MkNGODBDMDFGODVDNTc1RDNDMzVDOTk0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyOTU4NDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMGJRNTEteGVRVHlEY3lieXNOWXdIUVwiLFxuICBcInBob25lSWRcIjogXCJhZGY5ZjlmMC1iNjNlLTQzZGItYjVlZC1jNjBmOGRhN2FkYmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMjM1LFxuICAgICAgMzIsXG4gICAgICAxNDQsXG4gICAgICAxNDMsXG4gICAgICAxODksXG4gICAgICAxMTMsXG4gICAgICAzNyxcbiAgICAgIDEzMCxcbiAgICAgIDEwNyxcbiAgICAgIDIxMCxcbiAgICAgIDIzOCxcbiAgICAgIDI1NSxcbiAgICAgIDEwOSxcbiAgICAgIDE0OCxcbiAgICAgIDI1MSxcbiAgICAgIDIwMSxcbiAgICAgIDIxNixcbiAgICAgIDE5NyxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDIxNixcbiAgICAgIDExMixcbiAgICAgIDIwMCxcbiAgICAgIDE1OSxcbiAgICAgIDc2LFxuICAgICAgMjAzLFxuICAgICAgMTM0LFxuICAgICAgNzUsXG4gICAgICA4MCxcbiAgICAgIDE2MCxcbiAgICAgIDIzMCxcbiAgICAgIDEyMyxcbiAgICAgIDIzNixcbiAgICAgIDE1MCxcbiAgICAgIDEzMSxcbiAgICAgIDIxMSxcbiAgICAgIDE0MSxcbiAgICAgIDIyNSxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTRUxRRVo1U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTE5NzgxOTQ5MzM6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCS8J2QmPCdkJLwnZWK8J2VoPCdlZ3wnZWm8J2VpfCdlZrwnZWg8J2Vn/CdlaRcIixcbiAgICBcImxpZFwiOiBcIjg5ODk4MzYzMTg3MjYxOjYyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01tUWx2VUdFSjdNb0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiejRuUVJmTEZiSFpRanNWU0FhVG5FejJ6RDFuWis4OStEY3dPTzVwTzVSZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmajB6ZTVLc3hKVkpSeExoc3UzQW03UWtiVi9KdTlwbUl5bDdqTkRaKzh2cTEyN0xkMjdGZHJVWVdLRnpVWXAzeWxtZENQbG8xc1N0WncwS3FCRWhDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCZmZOZXA5N1U1TTdkS0FwaEkxNEpYeHRodGt1QlpIV0htWVB0STVOaEVvTEZ0bnZUYlRrcHhMNUlYT2FOYTBZem5iamNYZ1E5R3pMa0srME9VZHNqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MTk3ODE5NDkzMzo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyOTU4NDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQYTVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBhNS5qc29uIjogIntcImtleURhdGFcIjpcIjVDS2Y5MzUyQURiZlphRFBSQ1RCd0ttMitJUXlyY3pUbE9DeVRQb0Z0RGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1NjM0MjA4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjk1ODQxNjIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰",
  packname: process.env.PACK_NAME || "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰",
  botname : process.env.BOT_NAME  || "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰",
  ownername:process.env.OWNER_NAME|| "𝗦𝗬𝗦𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡𝗦 || 𝟮𝟬𝟮𝟰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "3e57046161ccf9ac1f4b9e03828a5fe9";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
