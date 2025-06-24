import { Express } from "express";
import { healthCheckRouter } from "./healthCheck";
import { directoryTreeRouter } from "./directoryTree";
import { editorContentRouter } from "./editorContent";
import { authRouter } from "./auth";

export const setupRoutes = (app: Express) => {
  // Health check route
  app.use("/health", healthCheckRouter);

  // Directory tree routes
  app.use("/api/directory-tree", directoryTreeRouter);

  // Editor content routes (now under directory-tree)
  app.use("/api/editor-content", editorContentRouter);

  // Auth routes
  app.use("/api/auth", authRouter);

  // Add other routes here
  // app.use('/api/v1/users', userRouter);
  // app.use('/api/v1/auth', authRouter);
};
