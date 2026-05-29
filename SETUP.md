# 🚀 HƯỚNG DẪN NHANH - SETUP & CHẠY

## ✅ Đã Hoàn Thành

Server đang chạy tại: **http://localhost:3000**

## 🔧 Cấu Hình Telegram (QUAN TRỌNG)

Để nhận thông báo check-in, bạn cần setup Telegram:

### Bước 1: Tạo Bot Telegram
1. Mở Telegram → Tìm `@BotFather`
2. Gõ `/newbot`
3. Đặt tên bot: `ShipperCheckIn` (ví dụ)
4. Đặt username: `shipper_checkin_bot` (phải là unique, kết thúc bằng `_bot`)
5. **Lưu Token** nhận được (ví dụ: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

### Bước 2: Lấy Chat ID
1. Tìm bot của bạn (vừa tạo)
2. Gõ `/start`
3. Tìm **Chat ID** bằng cách:
   - Mở link: `https://api.telegram.org/botTOKEN/getUpdates`
   - Thay `TOKEN` = token bot
   - Tìm `"id": xxxxx` trong kết quả JSON
4. **Lưu Chat ID** (ví dụ: `-1001234567890` cho nhóm, hoặc `123456789` cho cá nhân)

### Bước 3: Cập nhật File .env
```bash
# Mở file .env
PORT=3000
TELEGRAM_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
CHAT_ID=-1001234567890
```

### Bước 4: Restart Server
```bash
# Dừng server (Ctrl+C trong terminal)
# Rồi chạy lại
npm start
```

## 🎯 Các Tính Năng Mới Được Thêm

### 1. **Hai Nút Chính Thay Vì Một**
   - ✅ **📍 LẤY VỊ TRÍ**: Chỉ lấy vị trí GPS (không gửi)
   - ✅ **📤 SHARE VỊ TRÍ**: Gửi vị trí hiện tại đến Telegram
   - ✅ **✓ CHECK-IN GIAO HÀNG**: Xác nhận giao hàng thành công

### 2. **Form Nhập Số Điện Thoại**
   - Shipper phải nhập số điện thoại trước khi gửi
   - Được lưu lại để gửi Telegram

### 3. **Lấy Thông Tin Chi Tiết**
   - 🌍 **IP Address**: Public IP tự động lấy
   - 💻 **Device Type**: Desktop / Mobile / Tablet
   - 🌐 **Browser**: Chrome / Firefox / Safari / Edge
   - 🖥️ **Platform**: Windows / macOS / Linux / Android / iOS
   - 📺 **Screen Resolution**: 1920x1080 (ví dụ)
   - 📡 **Network Signal**: 4G / 5G / WiFi
   - 🕐 **Thời gian**: UTC+7 (Việt Nam)

### 4. **Thông Báo Telegram Đầy Đủ**
   - Gửi tin nhắn text với tất cả thông tin
   - Gửi vị trí GPS trên bản đồ Telegram
   - Link Google Maps clickable
   - Định dạng đẹp với emoji

### 5. **Giao Diện Hiện Đại**
   - Gradient backgrounds
   - Responsive design (mobile & desktop)
   - Toast notifications (thông báo nổi)
   - Status box hiển thị thông tin real-time

## 📱 Cách Sử Dụng

### Quy trình 1: Share Vị Trí (Trước khi giao)
```
1. Nhập số điện thoại
2. Bấm "📍 LẤY VỊ TRÍ"
3. Cho phép quyền GPS
4. Xem bản đồ cập nhật
5. Bấm "📤 SHARE VỊ TRÍ" → Gửi Telegram
```

### Quy trình 2: Check-in Giao Hàng (Xong giao)
```
1. Nhập số điện thoại
2. Bấm "📍 LẤY VỊ TRÍ"
3. Cho phép quyền GPS
4. Xem bản đồ cập nhật
5. Bấm "✓ CHECK-IN GIAO HÀNG" → Gửi & xác nhận
```

## 📊 Dữ Liệu Gửi Về Telegram

### Ví dụ tin nhắn:
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

**Kèm theo:**
- Vị trí GPS trên bản đồ Telegram
- Link Google Maps có thể click

## 🌐 Truy Cập từ Các Thiết Bị

### Từ Máy Tính (Localhost)
```
http://localhost:3000
```

### Từ Điện Thoại Cùng Mạng
```
http://YOUR_COMPUTER_IP:3000
# Ví dụ: http://192.168.1.100:3000
# (Thay YOUR_COMPUTER_IP = IP máy tính của bạn)

# Lấy IP máy tính:
# Windows: ipconfig
# Mac/Linux: ifconfig
```

### Qua Internet (Deploy Vercel)
```
https://your-project-name.vercel.app
```

## ⚠️ Lưu Ý Quan Trọng

### GPS Hoạt Động
- ✅ Hoạt động tốt trên **localhost**
- ✅ Hoạt động trên **HTTPS** (khi deploy)
- ❌ Không hoạt động trên **HTTP** (ngoài localhost)

### Quyền Truy Cập
- Khi nhấn "LẤY VỊ TRÍ", trình duyệt sẽ hiện **popup yêu cầu quyền GPS**
- **Bắt buộc phải cho phép** để lấy vị trí
- Nếu từ chối, phải vào Settings trình duyệt để cấp quyền lại

### Mobile vs Desktop
- 📱 **Mobile**: GPS chính xác hơn, nên sử dụng
- 🖥️ **Desktop**: GPS có thể không chính xác (nếu không có GPS hardware)

## 🔧 Cấu Hình Nâng Cao

### Thay Đổi Port
Mở file `.env`:
```
PORT=3000  # Thay 3000 bằng port khác (ví dụ 5000)
```

### Thêm/Xóa Thông Tin Gửi
Mở file `api/send-location.js`, tìm section **"Tạo tin nhắn chi tiết"**:
```javascript
const text = `
${actionEmoji} <b>${actionTitle}</b>

📞 Số điện thoại: ${phone}
📍 Tọa độ: ${lat.toFixed(6)}, ${lng.toFixed(6)}
🎯 Độ chính xác: ±${accuracy ? accuracy.toFixed(0) : '?'} mét

// Thêm thông tin mới ở đây
⏱️ Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
🔋 Battery: ${navigator.getBattery ? 'Check' : 'N/A'}
```

### Thay Đổi Giao Diện
Mở file `index.html`, chỉnh sửa CSS trong tag `<style>`:
```css
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Thay đổi colors */
}
```

## 🐛 Xử Lý Sự Cố

### ❌ Server không chạy
```bash
# Kiểm tra port 3000 không bị chiếm dụng
netstat -ano | findstr :3000

# Nếu bị chiếm, kill process
taskkill /PID <process_id> /F

# Hoặc đổi port trong .env
```

### ❌ GPS không hoạt động
- Kiểm tra HTTPS (hoặc localhost)
- Cho phép quyền định vị trong Settings
- Thử trình duyệt khác
- Restart trang (Ctrl+R hoặc Cmd+R)

### ❌ Telegram không nhận thông báo
- Kiểm tra TELEGRAM_TOKEN đúng chứa không
- Kiểm tra CHAT_ID đúng chứa không
- Bot phải là member nếu chat là nhóm
- Mở link test: `https://api.telegram.org/botTOKEN/getMe`

### ❌ Lỗi "Cannot find module"
```bash
# Cài lại dependencies
rm -r node_modules package-lock.json
npm install
```

## 📞 Hỗ Trợ Thêm

**Kiểm tra Browser Console:**
1. Mở: **F12** (hoặc **Cmd+Option+I** trên Mac)
2. Tab **Console** để xem lỗi
3. Screenshot lỗi nếu cần

**Kiểm tra Server Logs:**
- Xem terminal nơi chạy `npm start`
- Lỗi sẽ hiển thị ở đó

---

## 🎉 Hoàn Thành

✅ Hệ thống check-in shipper đã sẵn sàng!

Bây giờ có thể:
1. **Test trên localhost**: http://localhost:3000
2. **Cấu hình Telegram**: Nhập token & chat ID
3. **Share với team**: Dùng URL từ máy tính cùng mạng
4. **Deploy**: Đẩy lên Vercel để dùng trên internet

Chúc bạn thành công! 🚀
