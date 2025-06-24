import { Request, Response } from "express";
import { AppError } from "../middleware/errorHandler";
import {
  getAllTreeItems,
  findTreeItemById,
  addTreeItem,
  updateTreeItem,
  deleteTreeItemAndChildren,
} from "../models/DirectoryTreeStore";
import { findUserById } from "../models/UserStore";

// Get all items
export const getDirectoryTree = async (req: Request, res: Response) => {
  // In a real app, you might filter this by user or team
  const items = getAllTreeItems();
  res.json({ status: "success", data: items });
};

// Get single item by ID
export const getDirectoryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = findTreeItemById(id);
  if (!item) {
    throw new AppError(404, "Directory item not found");
  }
  res.json({ status: "success", data: item });
};

// Create new item
export const createDirectoryItem = async (req: Request, res: Response) => {
  const { parentId, name, type, ownerId } = req.body;

  if (!name || !type || !ownerId) {
    throw new AppError(400, "Name, type, and ownerId are required");
  }
  if (!findUserById(ownerId)) {
    throw new AppError(404, "Owner user not found");
  }
  if (parentId && !findTreeItemById(parentId)) {
    throw new AppError(404, "Parent directory not found");
  }

  const newItem = addTreeItem({
    name,
    type,
    parentId: parentId || null,
    ownerId,
  });
  res.status(201).json({ status: "success", data: newItem });
};

// Update item
export const updateDirectoryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, type, parentId } = req.body;

  if (!name && !type && parentId === undefined) {
    throw new AppError(
      400,
      "At least one field (name, type, parentId) is required"
    );
  }

  const updatedItem = updateTreeItem(id, { name, type, parentId });
  if (!updatedItem) {
    throw new AppError(404, "Directory item not found");
  }

  res.json({ status: "success", data: updatedItem });
};

// Delete item
export const deleteDirectoryItem = async (req: Request, res: Response) => {
  const { id } = req.params;

  const item = findTreeItemById(id);
  if (!item) {
    throw new AppError(404, "Directory item not found");
  }

  // This function will now handle content deletion recursively
  deleteTreeItemAndChildren(id);

  res.json({ status: "success", data: null });
};

// Search is now a simple filter on the in-memory cache.
// For large datasets, this should be a proper database query.
export const searchItems = async (req: Request, res: Response) => {
  const { query } = req.query;
  if (!query || typeof query !== "string") {
    throw new AppError(400, "Search query is required");
  }
  const allItems = getAllTreeItems();
  const searchResults = allItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  res.json({ status: "success", data: searchResults });
};
