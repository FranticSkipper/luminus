import { Request, Response } from "express";
import { AppError } from "../middleware/errorHandler";
import {
  findContentByFileId,
  saveContent,
  deleteContentByFileId,
  getAllContent,
} from "../models/EditorContentStore";
import { findTreeItemById, addTreeItem } from "../models/DirectoryTreeStore";

// Save editor content
export const saveEditorContent = async (req: Request, res: Response) => {
  try {
    const { fileId, content, parentId, userId } = req.body;

    if (!fileId || !content || !parentId || !userId) {
      throw new AppError(
        400,
        "fileId, content, parentId, and userId are required"
      );
    }
    const file = findTreeItemById(fileId);
    if (!file) {
      throw new AppError(404, "File not found in directory tree");
    }

    const savedContent = saveContent({ fileId, content, parentId, userId });
    res.status(200).json({ status: "success", data: savedContent });
  } catch (error) {
    console.error("Error saving editor content:", error);
    if (error instanceof AppError) {
      res
        .status(error.statusCode)
        .json({ status: "error", message: error.message });
    } else {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  }
};

// Get editor content by file ID
export const getEditorContent = async (req: Request, res: Response) => {
  const { fileId } = req.params;
  const editorContent = findContentByFileId(fileId);

  if (!editorContent) {
    // It's not an error for a file to have no content yet.
    // Return a default structure or an empty success response.
    return res.json({
      status: "success",
      data: { content: "" },
    });
  }
  res.json({ status: "success", data: editorContent });
};

// Get all editor content (for debugging/admin purposes)
export const getAllEditorContent = async (req: Request, res: Response) => {
  const allContent = getAllContent();
  res.json({ status: "success", data: allContent });
};

// Delete editor content
export const deleteEditorContent = async (req: Request, res: Response) => {
  const { fileId } = req.params;
  if (!fileId) {
    throw new AppError(400, "File ID is required");
  }
  deleteContentByFileId(fileId);
  res.json({ status: "success", data: null });
};

// Create a new file and save editor content in one step
export const createEditorContent = async (req: Request, res: Response) => {
  try {
    const { parentId, content, userId } = req.body;
    if (!content || !userId) {
      throw new AppError(400, "content and userId are required");
    }
    // Generate a default file name and type
    const fileName = `untitled-${Date.now()}.md`;
    const fileType = "file";
    // Create the file in the directory tree
    const newFile = addTreeItem({
      name: fileName,
      type: fileType,
      parentId: parentId ?? null,
      ownerId: userId,
    });
    // Save the editor content for the new file
    const savedContent = saveContent({
      fileId: newFile.id,
      content,
      parentId: parentId ?? null,
      userId,
    });
    res.status(201).json({
      status: "success",
      data: { file: newFile, content: savedContent },
    });
  } catch (error) {
    console.error("Error creating editor content:", error);
    if (error instanceof AppError) {
      res
        .status(error.statusCode)
        .json({ status: "error", message: error.message });
    } else {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  }
};
