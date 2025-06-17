import { Request, Response } from "express";
import { dummyDirectoryTree, DirectoryTreeItem } from "../models/DirectoryTree";
import { logger } from "../utils/logger";
import { AppError } from "../middleware/errorHandler";

// Get all items
export const getDirectoryTree = async (req: Request, res: Response) => {
  try {
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

// Search items
export const searchItems = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      throw new AppError(400, "Search query is required");
    }

    const searchResults = dummyDirectoryTree.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    res.json({
      status: "success",
      data: searchResults,
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    } else {
      logger.error("Error searching items:", error);
      res.status(500).json({
        status: "error",
        message: "Failed to search items",
      });
    }
  }
};

// Get single item by ID
export const getDirectoryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = dummyDirectoryTree.find((item) => item.id === id);

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
    const { parentId, name, type } = req.body;

    if (!name || !type) {
      throw new AppError(400, "Name and type are required");
    }

    const newItem: DirectoryTreeItem = {
      id: crypto.randomUUID(),
      name,
      type,
      parentId: parentId || null,
    };

    dummyDirectoryTree.push(newItem);
    res.status(201).json({
      status: "success",
      data: newItem,
    });
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
    const { name, type, parentId } = req.body;

    if (!name && !type && parentId === undefined) {
      throw new AppError(
        400,
        "At least one field (name, type, parentId) is required"
      );
    }

    const itemIndex = dummyDirectoryTree.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new AppError(404, "Directory item not found");
    }

    const updatedItem = {
      ...dummyDirectoryTree[itemIndex],
      ...(name && { name }),
      ...(type && { type }),
      ...(parentId !== undefined && { parentId }),
    };

    dummyDirectoryTree[itemIndex] = updatedItem;

    res.json({
      status: "success",
      data: updatedItem,
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
    const itemIndex = dummyDirectoryTree.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      throw new AppError(404, "Directory item not found");
    }

    // Remove the item
    dummyDirectoryTree.splice(itemIndex, 1);

    res.json({
      status: "success",
      data: null,
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    } else {
      logger.error("Error deleting directory item:", error);
      res.status(500).json({
        status: "error",
        message: "Failed to delete directory item",
      });
    }
  }
};
