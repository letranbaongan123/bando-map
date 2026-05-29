# 📤 HƯỚNG DẪN DEPLOY GITHUB & VERCEL

## 📊 Tính Năng Tự Động

### ✨ Khi Mở Trang Web
1. **Tự động yêu cầu quyền vị trí** (popup trình duyệt)
2. **Lấy vị trí GPS** thành công
3. **Gửi ngay thông tin về Telegram**:
   - ✅ Số điện thoại (nếu đã nhập)
   - ✅ Tọa độ GPS + link Google Maps
   - ✅ Mã đơn hàng (nếu đã nhập)
   - ✅ IP, Device, Browser, OS, tín hiệu, độ chính xác
   - ✅ Vị trí trên bản đồ Telegram

### ❌ Buttons Disabled Cho Đến Khi:
- ✅ Có vị trí GPS
- ✅ Nhập số điện thoại (bắt buộc)

### Sau Khi Lấy Vị Trí:
- **Nhập mã đơn hàng** (nếu có, không bắt buộc)
- **Nhập số điện thoại** (bắt buộc)
- **Bấm nút SHARE** hoặc **CHECK-IN**

---

## 🚀 DEPLOY LÊN GITHUB

### Bước 1: Khởi Tạo Git Repository

Mở Terminal/PowerShell tại thư mục dự án:
```bash
cd d:\googlemap

# Khởi tạo git
git init

# Cấu hình user (lần đầu)
git config user.name "Your Name"
git config user.email "your.email@gmail.com"

# Hoặc config global
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

### Bước 2: Thêm Tất Cả File
```bash
# Thêm all files
git add .

# Hoặc thêm từng file
git add index.html
git add app.js
git add package.json
# ...
```

### Bước 3: Commit Lần Đầu
```bash
git commit -m "Initial commit: Shipper check-in system with auto location request"
```

### Bước 4: Tạo Repository Trên GitHub

1. Mở https://github.com/new
2. **Repository name**: `shipper-checkin` (hoặc tên khác)
3. **Description**: `Hệ thống check-in giao hàng tự động với Telegram integration`
4. **Public** hoặc **Private** (tuỳ chọn)
5. Tích **"Add .gitignore"** → chọn **Node**
6. Tích **"Add a README.md"** (có sẵn rồi)
7. Bấm **"Create repository"**

### Bước 5: Push Lên GitHub
```bash
# Thêm remote URL
git remote add origin https://github.com/YOUR_USERNAME/shipper-checkin.git

# Đổi branch mặc định sang main (nếu GitHub dùng main)
git branch -M main

# Push code
git push -u origin main
```

**Hoặc nếu dùng SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/shipper-checkin.git
git branch -M main
git push -u origin main
```

### Bước 6: Verify Trên GitHub
- Mở https://github.com/YOUR_USERNAME/shipper-checkin
- Kiểm tra tất cả file đã được upload

---

## 🌐 DEPLOY LÊN VERCEL

### Bước 1: Tạo Tài Khoản Vercel

1. Mở https://vercel.com/signup
2. Đăng ký với **GitHub** (nên dùng GitHub account)
3. Authorize Vercel để truy cập GitHub
4. Xác nhận email

### Bước 2: Import Project

1. Mở https://vercel.com/new
2. Chọn **"Import Git Repository"**
3. Nếu không thấy repo, bấm **"Continue with GitHub"**
4. Cho phép Vercel truy cập GitHub
5. Tìm và chọn **`shipper-checkin`** repository
6. Bấm **"Import"**

### Bước 3: Cấu Hình Environment Variables

1. Tại trang cấu hình Vercel:
   - Tìm section **"Environment Variables"**
   
2. Thêm 2 variables:
   ```
   Name: TELEGRAM_TOKEN
   Value: your_bot_token_here
   Environments: All
   ```
   
   ```
   Name: CHAT_ID
   Value: your_chat_id_here
   Environments: All
   ```

3. Bấm **"Add"** cho mỗi variable

### Bước 4: Deploy

1. Bấm **"Deploy"**
2. Chờ Vercel build và deploy (khoảng 2-3 phút)
3. Khi thành công, bạn sẽ nhận URL: `https://shipper-checkin-xyz.vercel.app`

### Bước 5: Verify Deployment

1. Mở URL vừa nhận
2. Kiểm tra tính năng:
   - ✅ Popup yêu cầu vị trí
   - ✅ Bản đồ hiển thị
   - ✅ Nhập phone
   - ✅ Bấm Share/Check-in
   - ✅ Telegram nhận thông báo

---

## 🔄 CẬP NHẬT CODE SAU KHI DEPLOY

### Từ Local Lên GitHub
```bash
# Sửa code
# Rồi:

git add .
git commit -m "Fix: auto send location on page load"
git push origin main
```

### Vercel Tự Động Deploy
- Vercel sẽ **tự động deploy** khi bạn push lên GitHub
- Mỗi push = 1 deployment mới
- Kiểm tra lịch deploy tại https://vercel.com/dashboard

---

## 🛠️ TROUBLESHOOTING

### ❌ Error: "fatal: not a git repository"
```bash
# Khởi tạo git
git init
git add .
git commit -m "First commit"
```

### ❌ Error: "Authentication failed"
```bash
# Kiểm tra git config
git config user.name
git config user.email

# Reset credentials (Windows)
# Settings → Credential Manager → Windows Credentials → xóa github.com
```

### ❌ Vercel: "Build failed"
1. Kiểm tra `package.json` có đúng không
2. Kiểm tra `app.js` không có lỗi
3. Xem logs tại Vercel Dashboard → Deployments

### ❌ Telegram không nhận thông báo trên Vercel
1. Kiểm tra TELEGRAM_TOKEN đúng không
2. Kiểm tra CHAT_ID đúng không
3. Vercel có internet không (phải có)

---

## 📋 QUICK CHECKLIST

### GitHub Setup
- [ ] Git initialized locally
- [ ] All files committed
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Files visible on github.com

### Vercel Setup
- [ ] Account created on Vercel
- [ ] Project imported from GitHub
- [ ] TELEGRAM_TOKEN added
- [ ] CHAT_ID added
- [ ] Deployment successful
- [ ] URL generated

### Testing
- [ ] Open URL in browser
- [ ] Page auto requests location
- [ ] Map displays
- [ ] Telegram receives notification
- [ ] Share button works
- [ ] Check-in button works

---

## 🎯 URL & Links

### GitHub
```
Repository: https://github.com/YOUR_USERNAME/shipper-checkin
```

### Vercel
```
Live URL: https://shipper-checkin-xyz.vercel.app
Dashboard: https://vercel.com/dashboard
```

### Useful Commands
```bash
# Clone project (sau này)
git clone https://github.com/YOUR_USERNAME/shipper-checkin.git

# Check status
git status

# View logs
git log --oneline

# View remotes
git remote -v
```

---

## ✅ HOÀN THÀNH

Bây giờ hệ thống check-in của bạn đã sẵn sàng:
- ✨ Tự động request vị trí khi mở
- 📤 Gửi ngay Telegram
- 🌐 Deploy trên internet qua Vercel
- 📝 Quản lý code trên GitHub

🎉 **Congratulations!**
