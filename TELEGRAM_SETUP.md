# Telegram Integration Setup

## 🤖 Setting up Telegram Bot for Contact Form

### Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat with BotFather
3. Send `/newbot` command
4. Follow the instructions:
   - Choose a name for your bot (e.g., "Portfolio Contact Bot")
   - Choose a username (must end with 'bot', e.g., "YourNameContactBot")
5. Copy the bot token that BotFather provides

### Step 2: Get Your Chat ID

1. Send a message to your newly created bot
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Look for your chat ID in the response (it will be a number)

### Step 3: Configure Environment Variables

Create a `.env.local` file in the project root with:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### Step 4: Update Contact Information

1. Replace `@YourTelegramUsername` in the contact page with your actual Telegram username
2. Update the Telegram link URL to point to your actual Telegram profile

### Step 5: Test the Integration

1. Fill out the contact form on your website
2. Check your Telegram chat for the message
3. Verify that all form data is being sent correctly

## 📧 Email Integration (Optional)

To also send emails, add these environment variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password_here
```

## 🔧 Features

- ✅ Messages sent directly to your Telegram
- ✅ Formatted with emojis for easy reading
- ✅ Includes all form data (name, email, phone, subject, message)
- ✅ Clean error handling
- ✅ Works without email if Telegram is configured
- ✅ Maintains existing design and functionality

## 🛡️ Security Notes

- Never commit your `.env.local` file to version control
- Keep your bot token secure
- Consider setting up webhook authentication for production
