import { NextResponse } from 'next/server';

const BOT_TOKEN = '8303374299:AAFKxYRHZlCfzel1vAfznPQa6o-YK8qgJSc';
const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;
const SITE_URL = 'https://swlft-union.com'; 

export async function POST(req: Request) {
  const data = await req.json();
  const message = data?.message?.text;
  const chatId = data?.message?.chat?.id;

  if (!message || !chatId) return NextResponse.json({ ok: true });

  // Разделяем по символу "|"
  const parts = message.split('|').map((p: string) => p.trim());
  const [amount, senderName, recipientName] = parts;

  if (!amount || !senderName || !recipientName) {
    await fetch(`${BASE_URL}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Отправь 3 значения через символ "|":\n\n<сумма> | <имя_отправителя> | <имя_получателя>\n\nПример:\n1000 | Имя Отправителя | Имя Получателя`,
      }),
    });
    return NextResponse.json({ ok: true });
  }

  // Формируем ссылку
  const url = `${SITE_URL}/?amount=${encodeURIComponent(amount)}&senderName=${encodeURIComponent(senderName)}&recipientName=${encodeURIComponent(recipientName)}`;

  // Отправляем ссылку пользователю
  await fetch(`${BASE_URL}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: `Вот твоя ссылка:\n${url}`,
    }),
  });

  return NextResponse.json({ ok: true });
}
