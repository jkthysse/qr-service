# QR Service

A simple microservice for generating QR codes that link to product pages.  
Built with **Node.js**, **Express**, **TypeScript**, and the [`qrcode`](https://www.npmjs.com/package/qrcode) library.

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-org/qr-service.git
cd qr-service
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure TypeScript
A default `tsconfig.json` is already included.  
Source lives in `src/` and build output goes to `dist/`.

### 4. Run in development
```bash
npx ts-node src/index.ts
```

### 5. Build for production
```bash
npm run build   # runs tsc
node dist/index.js
```

---

## 🛠️ API

### Generate QR Code
```
GET /qr?productId=<id>
```

**Query params:**
- `productId` (string, required): Unique product identifier

**Response:**
- `200 OK` → PNG QR code image
- `400 Bad Request` → Missing/invalid `productId`
- `500 Internal Server Error` → Failed to generate QR

**Example:**
```
GET http://localhost:3000/qr?productId=12345
```

Returns a QR code pointing to:
```
https://yourdomain.com/product/12345
```

---

## 📂 Project Structure
```
qr-service/
├── src/
│   └── index.ts       # Entry point (Express app)
├── dist/              # Compiled JS (after build)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧩 Future Improvements
- Support multiple output formats (PNG, SVG, Base64).
- Add logging & monitoring.
- Integrate with product database.
- Optional auth on QR API.
