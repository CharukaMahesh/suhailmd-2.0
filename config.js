const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_03_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkwLFxuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDgxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDU0LFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkt2Mi9lM2dXMnNSTEZZL0dTV0g5RjZXOEtZZVNIQVg4SnFaR0srSkxDRkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllKdTVwVVdlUUZDUzQ3YmJPVUVIU3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzE3NTk0MTMtMTQyMS00MmI1LWFjNTEtY2U2MTRiMDg0YjE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDEyMyxcbiAgICAgIDQ3LFxuICAgICAgMixcbiAgICAgIDU3LFxuICAgICAgMjQ5LFxuICAgICAgODIsXG4gICAgICAyMzUsXG4gICAgICAzLFxuICAgICAgMTE5LFxuICAgICAgOTYsXG4gICAgICAxMzMsXG4gICAgICA0MyxcbiAgICAgIDIzMyxcbiAgICAgIDEwOSxcbiAgICAgIDgwLFxuICAgICAgMjA0LFxuICAgICAgMjIxLFxuICAgICAgMjU0LFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDk4LFxuICAgICAgNjcsXG4gICAgICAxMjgsXG4gICAgICA0OSxcbiAgICAgIDEwOCxcbiAgICAgIDE4OCxcbiAgICAgIDExNCxcbiAgICAgIDE4NixcbiAgICAgIDEyOCxcbiAgICAgIDc4LFxuICAgICAgMjAzLFxuICAgICAgMjI5LFxuICAgICAgNzgsXG4gICAgICAxNzEsXG4gICAgICAyMzAsXG4gICAgICAxODksXG4gICAgICAxMTAsXG4gICAgICAxMSxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxGUzFLNzM2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NDc0NTE1NTo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIsqALuG0gC7htITKnOG0gMqA4bSc4bSL4bSAIOG0jeG0gMqc4bSH6pyxypxcIixcbiAgICBcImxpZFwiOiBcIjIzNTMwNDQ0NzQyMjcwNzo0NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcVV3TVFGRU42TW9ic0dHQkFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdQT1NhOG1UNGtKcE1ZdS85SUxwaGNJU3RBUVZTdHlGMnhPVCs5Qzh0MzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTFF5SVUyZ0VRN0poVGc1QmJZMjJ0UE1JRnBIOVZBZS8vYS9CQjBQUW9BY0NYMWhRZWpWeXNQUHJPT1J1S0ZqNk1XYWR4anRPL2NONGNKUllFRkR0QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRVJsWjFPQ0F6czJVcFZuQ21hbFVhVHBGVDJva1o4THp5MmZma0RzQUtRT3dKeExiTG41Nzl2T1lCZGxOeUZSY1RXdVczMERDSi94ZkFMV1BKaWVWaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODQ3NDUxNTU6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODg3MDA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS29HXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLb0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYSUxhQlRrRG9kMmJXMEJGblhZL3hGQ2tPSHluU3UzYm50TmJqeTM0ZjZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODU4MzQ4NDAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
