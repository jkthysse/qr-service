
import express from "express";
import { generateProductQR } from "./qrService";
import { setupSwagger } from "./swagger";

const app = express();

// Setup Swagger UI and spec endpoint
setupSwagger(app);

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
app.get("/qr", async (req, res) => {
  try {
    const productId = req.query.productId as string;
    if (!productId) {
      return res.status(400).json({ error: "Missing required query parameter: productId" });
    }
    const qr = await generateProductQR(productId);
    res.set("Content-Type", "image/png");
    res.send(qr);
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to generate QR code" });
  }
});

app.listen(3000, () => console.log("QR service running on port 3000"));