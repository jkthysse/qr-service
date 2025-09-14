
// qrService.ts
// QR code generation logic (Single Responsibility Principle)

/**
 * @openapi
 * /qr:
 *   get:
 *     summary: Generate a QR code for a product
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: QR code image
 *         content:
 *           image/png:
 *             schema:
 *               type: string
 *               format: binary
 */

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
