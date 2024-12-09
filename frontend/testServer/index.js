/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const spdy = require('spdy');
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = 3050;

// Увімкнення Gzip-компресії
app.use(compression());

// Сервіс для статичних файлів
app.use(
  express.static(path.join(__dirname, '../build'), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.gz')) {
        res.setHeader('Content-Encoding', 'gzip');
        res.setHeader('Content-Type', 'application/javascript');
      }
    },
  })
);

// Повертаємо основний файл для SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Завантаження SSL-сертифікатів
const options = {
  key: fs.readFileSync('./ssl/key.pem'), // Шлях до приватного ключа
  cert: fs.readFileSync('./ssl/cert.pem'), // Шлях до сертифіката
};

// Створення HTTP/2 сервера з використанням spdy
spdy.createServer(options, app).listen(PORT, (err) => {
  if (err) {
    console.error('Помилка при запуску сервера:', err);
    return process.exit(1);
  }
  console.log(`HTTP/2 сервер запущено на https://localhost:${PORT}`);
});
