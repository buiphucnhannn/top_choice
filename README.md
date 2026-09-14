# Next.js + Tailwind CSS (Pure JavaScript - Không JSX)

Dự án Next.js 14 App Router được cấu hình với Tailwind CSS, được viết bằng **100% JavaScript thuần** không sử dụng cú pháp JSX (`React.createElement`).

## 🚀 Cấu trúc dự án

```text
├── app/
│   ├── globals.css      # Directives của Tailwind CSS (@tailwind base, v.v.)
│   ├── layout.js        # RootLayout viết bằng pure JS
│   └── page.js          # Trang chủ viết bằng pure JS
├── components/
│   └── Counter.js       # Client Component minh họa state và event listener
├── tailwind.config.js   # Cấu hình Tailwind CSS quét các file .js
├── postcss.config.js    # Cấu hình PostCSS
├── next.config.js       # Cấu hình Next.js
└── package.json
```

## 💡 Hướng dẫn viết Component không JSX

Trong React thuần, ta sử dụng hàm `React.createElement(type, props, ...children)` hoặc gán tắt `const h = React.createElement`:

### 1. Element cơ bản:
```javascript
import React from 'react';
const h = React.createElement;

export default function Greeting({ name }) {
  return h('div', { className: 'p-4 bg-slate-800 text-white rounded-xl' },
    h('h1', { className: 'text-xl font-bold' }, `Xin chào ${name}!`),
    h('p', { className: 'text-slate-400' }, 'Đây là đoạn văn bản.')
  );
}
```

### 2. Client Component với State:
```javascript
'use client';

import React, { useState } from 'react';
const h = React.createElement;

export default function Counter() {
  const [count, setCount] = useState(0);

  return h('button', {
    onClick: () => setCount(count + 1),
    className: 'px-4 py-2 bg-indigo-600 text-white rounded-lg'
  }, `Đã bấm: ${count} lần`);
}
```

## 🛠️ Khởi chạy

```bash
# Cài đặt dependencies (nếu chưa có)
npm install

# Chạy server phát triển
npm run dev

# Build dự án
npm run build

# Khởi chạy bản production
npm run start
```
