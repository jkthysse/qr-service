// Swagger configuration and setup

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "QR API",
      version: "1.0.0",
      description: "API to generate QR codes for products",
    },
  },
  apis: ["./src/index.ts", "./src/qrService.ts", "./src/swagger.ts"], // Path to the API docs
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);

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
export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/swagger", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
