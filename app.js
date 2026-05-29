import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Phục vụ file tĩnh
app.use(express.static(__dirname));

// Import handler API
import handler from './api/send-location.js';

// API route
app.post('/api/send-location', (req, res) => {
  handler(req, res);
});

// Route chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Lỗi:', err);
  res.status(500).json({
    success: false,
    error: 'Có lỗi xảy ra',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Không tìm thấy route'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
🚀 Hệ thống check-in shipper đang chạy
📍 URL: http://localhost:${PORT}
📌 Phiên bản: 1.0.0
  `);
});
