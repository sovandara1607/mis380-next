import { z } from "zod";
import { publicProcedure, router } from "@/server/trpc";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: '.env.local' });

// Telegram Bot API function
async function sendToTelegram(input: {
  subject?: string;
  message: string;
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("Telegram configuration missing. Bot Token:", !!botToken, "Chat ID:", !!chatId);
    throw new Error("Telegram not configured. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local");
  }

  const message = `
🔔 *New Contact Form Submission*

📋 *Subject:* ${input.subject || 'General Inquiry'}

💬 *Message:*
${input.message}

---
_Sent from Portfolio Contact Form_
  `.trim();

  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(telegramApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    }),
  });

  if (!response.ok) {
    throw new Error(`Telegram API error: ${response.statusText}`);
  }

  return response.json();
}

export const appRouter = router({
  health: publicProcedure.query(() => ({ ok: true })),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          subject: z.string().optional(),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Send to Telegram
          await sendToTelegram(input);
          
          // Log for debugging
          console.log("Contact submission sent to Telegram:", input);
          
          return { success: true, message: "Message sent to both email and Telegram successfully!" };
        } catch (error) {
          console.error("Error sending message:", error);
          throw new Error("Failed to send message. Please try again.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;

