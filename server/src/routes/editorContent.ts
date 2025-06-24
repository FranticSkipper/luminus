import { Router } from "express";
import {
  saveEditorContent,
  getEditorContent,
  getAllEditorContent,
  deleteEditorContent,
  createEditorContent,
} from "../controllers/editorContentController";

const router = Router();

// Save editor content
router.post("/", saveEditorContent);

// Get all editor content (for debugging/admin)
router.get("/", getAllEditorContent);

// Get editor content by file ID
router.get("/:fileId", getEditorContent);

// Delete editor content by file ID
router.delete("/:fileId", deleteEditorContent);

// Create a new file and save editor content
router.post("/create", createEditorContent);

export { router as editorContentRouter };
