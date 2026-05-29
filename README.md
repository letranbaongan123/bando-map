# 🚚 Hệ Thống Check-in Giao Hàng Shipper

Ứng dụng web hiện đại để shipper check-in xác nhận đã đến nơi giao hàng với GPS tracking, bản đồ tương tác, và tích hợp Telegram.

## ✨ Tính Năng Chính

### 📍 Vị Trí & GPS
- 🗺️ **Bản đồ OpenStreetMap lớn**: Hiển thị toàn màn hình với zoom động
- 📍 **Lấy vị trí GPS**: Tích hợp Geolocation API, độ chính xác cao
- 🎯 **Vòng tròn chính xác**: Vẽ vòng tròn theo bán kính sai số GPS
- 📌 **Marker động**: Hiển thị vị trí shipper trên bản đồ

### 📱 Giao Diện
- ✨ **Thiết kế hiện đại**: Gradient colors, responsive design
- 📲 **Mobile friendly**: Thích ứng với mọi kích thước màn hình
- 🌈 **Giao diện thân thiện**: Toast notifications, status box rõ ràng

### 📞 Thông Tin Shipper
- **Nhập số điện thoại**: Form input dễ sử dụng
- **Lấy IP public**: Tự động xác định IP của thiết bị
- **Thu thập device info**: Device type, Browser, Platform, Resolution, Network signal

### 📤 Chia Sẻ & Check-in
- **Nút Share Vị Trí**: Gửi thông tin hiện tại về Telegram
- **Nút Check-in Giao Hàng**: Xác nhận hoàn tất giao hàng
- **Gửi Link Google Maps**: Kèm theo tọa độ chính xác

### 📲 Tích Hợp Telegram
- ✅ Gửi thông báo chi tiết về Telegram
- 📌 Kèm link Google Maps clickable
- 🗺️ Gửi vị trí chính xác trên bản đồ Telegram
- 📊 Thông tin đầy đủ: IP, phone, device, browser, OS, signal, thời gian

## 📋 Thông Tin Gửi Về Telegram

Mỗi lần share hoặc check-in, các thông tin sau được gửi:

1. **Số điện thoại**: ✓ Bắt buộc
2. **Tọa độ GPS**: Latitude, Longitude
3. **Độ chính xác**: ±X mét
4. **IP Address**: Public IP
5. **Thiết bị**: Desktop / Mobile / Tablet
6. **Trình duyệt**: Chrome / Firefox / Safari / Edge
7. **Hệ điều hành**: Windows / Linux / macOS / iOS / Android
8. **Độ phân giải**: Màn hình WxH
9. **Tín hiệu mạng**: 4G / 5G / WiFi
10. **Thời gian**: Thời gian UTC+7
11. **Link Google Maps**: Clickable link đến vị trí
12. **Action type**: Share / Check-in

## 🚀 Cài Đặt & Chạy

### 1. Clone/Tải repository
```bash
cd d:\googlemap
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Cấu hình Telegram (tùy chọn nhưng khuyến nghị)
- Mở file `.env`
- Thay `your_telegram_bot_token_here` bằng token bot của bạn
- Thay `your_telegram_chat_id_here` bằng chat ID

**Hướng dẫn lấy Telegram token & chat ID:**
1. Chat với `@BotFather` trên Telegram
2. Gõ `/newbot` → tạo bot mới → lấy **TELEGRAM_TOKEN**
3. Gõ `/getid` hoặc `/start` với bot của bạn → lấy **CHAT_ID**

### 4. Chạy ứng dụng
```bash
npm start
```

Truy cập: **http://localhost:3000**

## 📖 Hướng Dẫn Sử Dụng

### Quy trình Shipper:
1. **Mở trang web** → Nhập số điện thoại
2. **Bấm "📍 LẤY VỊ TRÍ"** → Cho phép quyền GPS khi trình duyệt yêu cầu
3. **Xem bản đồ cập nhật** → Marker hiển thị vị trí hiện tại
4. **Bấm "📤 SHARE VỊ TRÍ"** → Gửi thông tin sang Telegram (chia sẻ trước)
5. **Bấm "✓ CHECK-IN GIAO HÀNG"** → Xác nhận giao hàng thành công

Hoặc:
- Truy cập trực tiếp link check-in → Tự động request GPS

## 🔧 API Endpoint

### POST `/api/send-location`

**Yêu cầu:**
```json
{
  "lat": 10.7769,
  "lng": 106.7009,
  "accuracy": 25.5,
  "ip": "203.0.113.42",
  "phone": "0912345678",
  "device": "Mobile",
  "browser": "Chrome",
  "platform": "Android",
  "screen": "1920x1080",
  "signal": "4G",
  "action": "checkin",
  "timestamp": "2026-05-29T10:30:00.000Z",
  "mapsLink": "https://maps.google.com/?q=10.7769,106.7009"
}
```

**Phản hồi (200):**
```json
{
  "success": true,
  "message": "Check-in thành công",
  "data": {
    "lat": 10.7769,
    "lng": 106.7009,
    "accuracy": 25.5,
    "phone": "0912345678",
    "action": "checkin",
    "timestamp": "2026-05-29T10:30:00.000Z"
  }
}
```

## 📁 Cấu Trúc Thư Mục

```
googlemap/
├── 📄 index.html          ← Trang web chính
├── 📄 app.js              ← Server Express
├── 📄 package.json        ← Dependencies
├── 📄 .env                ← Cấu hình (gitignore)
├── 📄 README.md           ← Hướng dẫn
├── 📄 vercel.json         ← Cấu hình Vercel
├── 📄 .gitignore          ← Git ignore
└── 📁 api/
    └── 📄 send-location.js ← API handler
```

## 🔐 Bảo Mật

- ✅ CORS được cấu hình
- ✅ Validation input dữ liệu
- ✅ Error handling toàn diện
- ✅ Environment variables cho secrets
- ✅ Không lưu dữ liệu nhạy cảm

## 🌐 Yêu Cầu Browser

- ✅ Hỗ trợ **Geolocation API**
- ✅ Hỗ trợ **Fetch API**
- ✅ JavaScript enabled
- ⚠️ GPS chỉ hoạt động trên **HTTPS** (ngoại trừ localhost)

### Browser Tương Thích:
- Chrome 50+
- Firefox 45+
- Safari 10+
- Edge 15+
- Mobile browsers

## 📦 Dependencies

```json
{
  "express": "^4.18.2",    // Web framework
  "cors": "^2.8.5",        // Cross-origin
  "dotenv": "^16.3.1",     // Environment variables
  "leaflet": "1.9.4"       // Maps (CDN)
}
```

## 🔔 Thông Báo Telegram Chi Tiết

### Format tin nhắn:
```
✅ CHECK-IN GIAO HÀNG

📞 Số điện thoại: 0912345678
📍 Tọa độ: 10.776900, 106.700900
🎯 Độ chính xác: ±25 mét

🌍 Thông tin kết nối:
IP: 203.0.113.42
Mạng: 4G

💻 Thông tin thiết bị:
Thiết bị: Mobile
Trình duyệt: Chrome
Hệ điều hành: Android
Độ phân giải: 1920x1080

🕐 Thời gian: 29/5/2026 10:30:00
📌 Bản đồ: [Xem trên Google Maps]
```

## 🐛 Troubleshooting

### ❌ GPS không lấy được
- Kiểm tra HTTPS (localhost OK)
- Cho phép quyền định vị trên trình duyệt
- Kiểm tra GPS trên thiết bị có bật không
- Thử refresh trang

### ❌ Lỗi "npm: command not found"
- Cài Node.js từ nodejs.org
- Restart terminal
- Chạy `npm install` lại

### ❌ Port 3000 đang sử dụng
- Thay đổi PORT trong .env
- Hoặc kill process: `npx kill-port 3000`

### ❌ Telegram không nhận thông báo
- Kiểm tra TELEGRAM_TOKEN đúng không
- Kiểm tra CHAT_ID đúng không
- Bot phải là member của nhóm (nếu chat ID là nhóm)
- Thử chạy test: `curl https://api.telegram.org/botTOKEN/getMe`

## 📚 Hướng Dẫn Vercel Deploy

### 1. Đẩy code lên GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy trên Vercel
```bash
npm install -g vercel
vercel
```

### 3. Cấu hình Environment Variables
- Vào Vercel Dashboard → Settings → Environment Variables
- Thêm: `TELEGRAM_TOKEN` và `CHAT_ID`

## 📝 Thay Đổi Yêu Cầu Gửi

Để chỉnh sửa các thông tin gửi, chỉnh sửa file `api/send-location.js`:

```javascript
// Thêm dòng mới trong payload
const payload = {
  // ... thêm field mới
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  // ...
};
```

## 💡 Mẹo Sử Dụng

- 📱 **Mobile**: Mở link trên điện thoại để có độ chính xác GPS tốt nhất
- 🌐 **Offline**: Bản đồ vẫn hoạt động nhưng không có tile (sau khi load lần đầu)
- 🔄 **Cập nhật vị trí**: Bấm "LẤY VỊ TRÍ" nhiều lần để cập nhật
- 📸 **Screenshot**: Lưu screenshot bản đồ cho chứng minh

## 📄 License

MIT License - Tự do sử dụng, sửa đổi, phân phối

## 👨‍💻 Support & Liên Hệ

Có vấn đề? 
- Kiểm tra console browser (F12 → Console)
- Xem server logs
- Liên hệ tác giả

---

**Phiên bản**: 1.0.0  
**Cập nhật**: 2026-05-29  
**Trạng thái**: ✅ Production Ready
