const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'سلام! ربات با موفقیت روشن شد 🤖');
});

console.log('Telegram bot is running...');