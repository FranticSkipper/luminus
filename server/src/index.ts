import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "./config";
import { errorHandler } from "./middleware/errorHandler";
import { logger } from "./utils/logger";
import { setupRoutes } from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
setupRoutes(app);

// Error handling
app.use(errorHandler);

// Start server
const PORT = config.port || 3001;
const HOST = "localhost";
const URL = `http://${HOST}:${PORT}`;

app.listen(PORT, () => {
  logger.info("🚀 Server is running!");
  logger.info(`📡 URL: ${URL}`);
  logger.info(`📚 API Documentation:`);
  logger.info(`   GET    ${URL}/api/directory-tree`);
  logger.info(`   GET    ${URL}/api/directory-tree/:id`);
  logger.info(`   POST   ${URL}/api/directory-tree`);
  logger.info(`   PATCH  ${URL}/api/directory-tree/:id`);
  logger.info(`   DELETE ${URL}/api/directory-tree/:id`);
});
