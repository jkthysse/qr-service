// swagger.ts
// Swagger configuration and setup (Single Responsibility Principle)

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
  apis: ["./src/index.ts", "./src/qrService.ts"], // Path to the API docs
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/swagger", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
