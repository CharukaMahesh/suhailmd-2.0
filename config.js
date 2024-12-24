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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_41_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDUxLFxuICAgICAgICA0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMktBZzdQenNmR3Nsdk1RTFJxb1d4UmZXaHpBSTJmc052MmRBWGRTNUdyYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4OTc0ODI0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjEwOEY2MDQ0NzA1NzU4NzE4QjI3RTdBQTYxNTgyNzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1MDA0NDU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInA2ZHgzVzJRVEMycU0wV3o3QWh4c0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWY2MDYzNTgtYjNiNC00OTA5LWFhNDItYjAwYmVhNzA5NWM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDIyNSxcbiAgICAgIDgyLFxuICAgICAgNzMsXG4gICAgICAxNSxcbiAgICAgIDIzLFxuICAgICAgMTAsXG4gICAgICAyNDksXG4gICAgICAxMDMsXG4gICAgICAyLFxuICAgICAgNjcsXG4gICAgICAxNjMsXG4gICAgICAxNTgsXG4gICAgICAxNjMsXG4gICAgICA1MyxcbiAgICAgIDE3MSxcbiAgICAgIDEyMSxcbiAgICAgIDE0NixcbiAgICAgIDEyMCxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAyMjEsXG4gICAgICAyMDcsXG4gICAgICA2OSxcbiAgICAgIDYyLFxuICAgICAgMjQwLFxuICAgICAgMTA0LFxuICAgICAgMjgsXG4gICAgICA5NCxcbiAgICAgIDEzMSxcbiAgICAgIDk1LFxuICAgICAgNTksXG4gICAgICAxNzgsXG4gICAgICA4LFxuICAgICAgMTM0LFxuICAgICAgMyxcbiAgICAgIDgxLFxuICAgICAgMTYwLFxuICAgICAgNzksXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1dHMTk3SDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg5NzQ4MjQxOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzAxMDY5OTQ4MjczMjg6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG5kOFBVQkVLS2lxTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmN0FqdXNYdVE1VEllc3ZNclk4anZYK011K2tBQUZ4Y3dxNGVDTmtudEZFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjk1OVRibncrM0FWeitnVUdySzRGMEZsdXZMbzNhZjVGdFlQUmRkZHBMN0tmTnUvSktXWHRjOXlyWEh2TWc3T1dhUno5eTQ0TzVIVlkvVzkvQXBDSUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImN0ZHBzeXNrODhOd0RVZk1ON2N4cGdjNCtUek13NzhTcjZkQyszbUFNU0VTaTBlajBxOHVSZlpUVGxZL1o2YUhselJpcmNMWjczZjJkbjZyUWhlTGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg5NzQ4MjQxOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTAwNDQ1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVEb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRURvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYjIzNUY1WStBaDRPSjRlaXZxUktRRk1SM2NDU3JYZVkzdzNlMlRnRE5SMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTU2NDkyNzIsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUwMDQ0Mzk3MzZcIn0iCn0="  // PUT your SESSION_ID 


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
