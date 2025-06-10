import { Router } from "express";
import {
  getDirectoryTree,
  getDirectoryItem,
  createDirectoryItem,
  updateDirectoryItem,
  deleteDirectoryItem,
} from "../controllers/directoryTreeController";

const router = Router();

// Get all items
router.get("/", getDirectoryTree);

// Get single item
router.get("/:id", getDirectoryItem);

// Create new item
router.post("/", createDirectoryItem);

// Update item
router.patch("/:id", updateDirectoryItem);

// Delete item
router.delete("/:id", deleteDirectoryItem);

export const directoryTreeRouter = router;
