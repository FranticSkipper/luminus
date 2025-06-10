import { Express } from "express";
import { healthCheckRouter } from "./healthCheck";
import { directoryTreeRouter } from "./directoryTree";

export const setupRoutes = (app: Express) => {
  // Health check route
  app.use("/health", healthCheckRouter);

  // Directory tree routes
  app.use("/api/directory-tree", directoryTreeRouter);

  // Add other routes here
  // app.use('/api/v1/users', userRouter);
  // app.use('/api/v1/auth', authRouter);
};
