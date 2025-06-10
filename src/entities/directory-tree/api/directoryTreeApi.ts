import type { DirectoryTreeItem, DirectoryTreeResponse } from "../model/types";

const API_URL = "http://localhost:3000/api/directory-tree";

export const directoryTreeApi = {
  getAll: async (): Promise<DirectoryTreeItem[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch directory tree");
    }
    const data: DirectoryTreeResponse = await response.json();
    return data.data;
  },

  getById: async (id: string): Promise<DirectoryTreeItem> => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch directory item");
    }
    const data = await response.json();
    return data.data;
  },

  create: async (
    item: Omit<DirectoryTreeItem, "id">
  ): Promise<DirectoryTreeItem> => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error("Failed to create directory item");
    }
    const data = await response.json();
    return data.data;
  },

  update: async (
    id: string,
    item: Partial<DirectoryTreeItem>
  ): Promise<DirectoryTreeItem> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error("Failed to update directory item");
    }
    const data = await response.json();
    return data.data;
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete directory item");
    }
  },
};
