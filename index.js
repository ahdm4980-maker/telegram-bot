index.js

Edit file

1 const TelegramBot = 'node-telegram-bot-a

2

Delete file

Show History

3 const token = "88499 zdVgfuWF2BoKopAJ-HTSWjXDngqhr4" ;

5 const bot = new TelegramBot (token, { polling : true });

6

7 bot.onText(/\/start/, (msg) => {

8 bot.sendMessage(msg.chat.id, ;(". سلام ربات با موفقیت روشن شد

9 });