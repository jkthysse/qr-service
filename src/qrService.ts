// qrService.ts
// QR code generation logic (Single Responsibility Principle)

import QRCode from "qrcode";

export async function generateProductQR(productId: string): Promise<Buffer> {
  if (!productId || typeof productId !== "string") {
    throw new Error("Invalid or missing productId");
  }
  const productProtocol = "https";
  const productApiUrl = "cms.thysse.org";
  const productApiEndpoint = "product";
  const url = `${productProtocol}://${productApiUrl}/${productApiEndpoint}/${productId}`;
  return QRCode.toBuffer(url);
}
