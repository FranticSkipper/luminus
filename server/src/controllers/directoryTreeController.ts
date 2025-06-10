import { Request, Response } from "express";
import { dummyDirectoryTree, DirectoryTreeItem } from "../models/DirectoryTree";
import { logger } from "../utils/logger";
import { AppError } from "../middleware/errorHandler";

// Helper function to find and update an item in the tree
const findAndUpdateItem = (
  items: DirectoryTreeItem[],
  id: string,
  updateFn: (item: DirectoryTreeItem) => DirectoryTreeItem
): DirectoryTreeItem[] => {
  return items.map((item) => {
    if (item.id === id) {
      return updateFn(item);
    }
    if (item.children) {
      return {
        ...item,
        children: findAndUpdateItem(item.children, id, updateFn),
      };
    }
    return item;
  });
};

// Helper function to find and delete an item in the tree
const findAndDeleteItem = (
  items: DirectoryTreeItem[],
  id: string
): DirectoryTreeItem[] => {
  return items.filter((item) => {
    if (item.id === id) {
      return false;
    }
    if (item.children) {
      item.children = findAndDeleteItem(item.children, id);
    }
    return true;
  });
};

// Get all items
export const getDirectoryTree = async (req: Request, res: Response) => {
  try {
    // In a real application, you would fetch this data from a database
    // or file system. For now, we're using dummy data.
    res.json({
      status: "success",
      data: dummyDirectoryTree,
    });
  } catch (error) {
    logger.error("Error fetching directory tree:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch directory tree",
    });
  }
};

// Get single item by ID
export const getDirectoryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findItem = (items: DirectoryTreeItem[]): DirectoryTreeItem | null => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = findItem(item.children);
          if (found) return found;
        }
      }
      return null;
    };

    const item = findItem(dummyDirectoryTree);
    if (!item) {
      throw new AppError(404, "Directory item not found");
    }

    res.json({
      status: "success",
      data: item,
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    } else {
      logger.error("Error fetching directory item:", error);
      res.status(500).json({
        status: "error",
        message: "Failed to fetch directory item",
      });
    }
  }
};

// Create new item
export const createDirectoryItem = async (req: Request, res: Response) => {
  try {
    const { parentId, name, type, path } = req.body;

    if (!name || !type || !path) {
      throw new AppError(400, "Name, type, and path are required");
    }

    const newItem: DirectoryTreeItem = {
      id: crypto.randomUUID(),
      name,
      type,
      path,
      children: type === "directory" ? [] : undefined,
    };

    if (parentId) {
      // Add to parent's children
      const updatedTree = findAndUpdateItem(
        dummyDirectoryTree,
        parentId,
        (item) => ({
          ...item,
          children: [...(item.children || []), newItem],
        })
      );
      res.json({
        status: "success",
        data: newItem,
      });
    } else {
      // Add as root item
      dummyDirectoryTree.push(newItem);
      res.status(201).json({
        status: "success",
        data: newItem,
      });
    }
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    } else {
      logger.error("Error creating directory item:", error);
      res.status(500).json({
        status: "error",
        message: "Failed to create directory item",
      });
    }
  }
};

// Update item
export const updateDirectoryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, type, path } = req.body;

    if (!name && !type && !path) {
      throw new AppError(
        400,
        "At least one field (name, type, path) is required"
      );
    }

    const updatedTree = findAndUpdateItem(dummyDirectoryTree, id, (item) => ({
      ...item,
      ...(name && { name }),
      ...(type && { type }),
      ...(path && { path }),
    }));

    res.json({
      status: "success",
      data: { id, name, type, path },
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    } else {
      logger.error("Error updating directory item:", error);
      res.status(500).json({
        status: "error",
        message: "Failed to update directory item",
      });
    }
  }
};

// Delete item
export const deleteDirectoryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updatedTree = findAndDeleteItem(dummyDirectoryTree, id);

    res.json({
      status: "success",
      message: "Directory item deleted successfully",
    });
  } catch (error) {
    logger.error("Error deleting directory item:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to delete directory item",
    });
  }
};
