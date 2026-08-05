const TelegramBot = require('node-telegram-bot-api');

const token = "8849951874:AAEvrzdVgfuWF2BoKopAJ-HTSWjXDngqhr4";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "سلام! ربات با موفقیت روشن شد. 🎉");
});