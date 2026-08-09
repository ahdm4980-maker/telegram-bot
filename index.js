const TelegramBot = require('node-telegram-bot-api');

const token = 'YOUR_BOT_TOKEN';

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'سلام! ربات با موفقیت روشن شد 8849951874:AAEmsXODGI8Q4UqRKI97Tz-uXKeTPtWlc94');
});

console.log('Telegram bot is running...');