export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { gameId, packageInfo, paymentType, cardDetails } = req.body;

    let message = `🔔 *CÓ GIAO DỊCH NẠP MỚI* 💎\n\n- *ID Game:* \`${gameId}\`\n- *Gói nạp:* ${packageInfo}\n- *Hình thức:* ${paymentType}`;

    if (cardDetails) {
        message += `\n- *Loại thẻ:* ${cardDetails.cardType}\n- *Mệnh giá:* ${cardDetails.cardPrice}\n- *Mã thẻ:* \`${cardDetails.cardCode}\`\n- *Số Seri:* \`${cardDetails.cardSerial}\``;
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        const data = await response.json();
        if (data.ok) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ error: 'Failed to send to telegram' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
          }
