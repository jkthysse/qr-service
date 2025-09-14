
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

# QR Service
---

## 📦 Official Release

This repository is now officially released under the MIT License. See the LICENSE file for details.

A simple microservice for generating QR codes that link to product pages.  
Built with **Node.js**, **Express**, **TypeScript**, and the [`qrcode`](https://www.npmjs.com/package/qrcode) library.

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/jkthysse/qr-code-generator.git
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
https://cms.thysse.org/product/12345
```

---

## 📖 API Documentation (Swagger)

Interactive API docs are available via Swagger UI:

- [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

You can view, test, and explore all endpoints here.

---

## 🔗 Postman Integration

You can import the OpenAPI (Swagger) spec directly into Postman:

1. Start the server (`npx ts-node src/index.ts` or `npm run dev`).
2. In Postman, click **Import** > **Link** and enter:
	```
	http://localhost:3000/swagger.json
	```
3. Postman will create a collection with all documented endpoints for automation and testing.

---

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
