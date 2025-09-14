
import express from "express";
import QRCode from "qrcode";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "QR API",
      version: "1.0.0",
      description: "API to generate QR codes for products",
    },
  },
  apis: ["./src/index.ts"], // Path to the API docs
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
const app = express();

// Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/**
 * @openapi
 * /swagger:
 *   get:
 *     summary: Get the OpenAPI specification in JSON format
 *     responses:
 *       200:
 *         description: OpenAPI spec in JSON
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
app.get("/swagger", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

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
  const { productId } = req.query;

  const productProtocol = "https";
  const productApiUrl = "cms.thysse.org";
  const productApiEndpoint = "product";
  const url = `${productProtocol}://${productApiUrl}/${productApiEndpoint}/${productId}`;

  const qr = await QRCode.toBuffer(url);
  res.set("Content-Type", "image/png");
  res.send(qr);
});

app.listen(3000, () => console.log("QR service running on port 3000"));