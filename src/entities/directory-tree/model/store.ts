import { create } from "zustand";
import type { DirectoryTreeItem } from "./types";
import { directoryTreeApi } from "../api/directoryTreeApi";

interface DirectoryTreeStore {
  items: DirectoryTreeItem[];
  isLoading: boolean;
  error: string | null;
  fetchItems: () => Promise<void>;
  addItem: (item: Omit<DirectoryTreeItem, "id">) => Promise<void>;
  updateItem: (id: string, item: Partial<DirectoryTreeItem>) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
}

export const useDirectoryTreeStore = create<DirectoryTreeStore>((set) => ({
  items: [],
  isLoading: false,
  error: null,

  fetchItems: async () => {
    set({ isLoading: true, error: null });
    try {
      const items = await directoryTreeApi.getAll();
      set({ items, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  addItem: async (item) => {
    set({ isLoading: true, error: null });
    try {
      const newItem = await directoryTreeApi.create(item);
      set((state) => ({ items: [...state.items, newItem], isLoading: false }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  updateItem: async (id, item) => {
    set({ isLoading: true, error: null });
    try {
      const updatedItem = await directoryTreeApi.update(id, item);
      set((state) => ({
        items: state.items.map((i) => (i.id === id ? updatedItem : i)),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  deleteItem: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await directoryTreeApi.delete(id);
      set((state) => ({
        items: state.items.filter((i) => i.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));
