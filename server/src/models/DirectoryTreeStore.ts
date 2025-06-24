import fs from "fs";
import path from "path";
import crypto from "crypto";
import { DirectoryTreeItem } from "./DirectoryTree";
import { addFileToUser, removeFileFromUser } from "./UserStore";
import { deleteContentByFileId } from "./EditorContentStore";

const DIR_TREE_FILE = path.join(__dirname, "../data/directoryTree.json");

const ensureDataDirExists = () => {
  const dir = path.dirname(DIR_TREE_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const readTreeFromFile = (): Record<string, DirectoryTreeItem> => {
  ensureDataDirExists();
  try {
    if (fs.existsSync(DIR_TREE_FILE)) {
      const data = fs.readFileSync(DIR_TREE_FILE, "utf-8");
      if (data) {
        return JSON.parse(data);
      }
    }
  } catch {
    // Start fresh on error
  }
  // Create a root directory if the store is empty
  const rootId = "1";
  return {
    [rootId]: {
      id: rootId,
      name: "root",
      type: "directory",
      parentId: null,
      ownerId: "system", // A system user owns the root
    },
  };
};

const writeTreeToFile = (tree: Record<string, DirectoryTreeItem>): void => {
  ensureDataDirExists();
  fs.writeFileSync(DIR_TREE_FILE, JSON.stringify(tree, null, 2), "utf-8");
};

const treeCache = readTreeFromFile();

export const getAllTreeItems = (): DirectoryTreeItem[] => {
  return Object.values(treeCache);
};

export const findTreeItemById = (id: string): DirectoryTreeItem | undefined => {
  return treeCache[id];
};

export const addTreeItem = (
  itemData: Omit<DirectoryTreeItem, "id">
): DirectoryTreeItem => {
  const id = crypto.randomUUID();
  const newItem: DirectoryTreeItem = { ...itemData, id };
  treeCache[id] = newItem;
  // Link file to user
  addFileToUser(newItem.ownerId, newItem.id);
  writeTreeToFile(treeCache);
  return newItem;
};

export const updateTreeItem = (
  id: string,
  updates: Partial<Omit<DirectoryTreeItem, "id" | "ownerId">>
): DirectoryTreeItem | undefined => {
  const item = treeCache[id];
  if (item) {
    // Prevent ownerId from being changed through this function
    treeCache[id] = { ...item, ...updates };
    writeTreeToFile(treeCache);
    return treeCache[id];
  }
  return undefined;
};

export const deleteTreeItemAndChildren = (id: string): void => {
  const itemToDelete = treeCache[id];
  if (!itemToDelete) return;

  // Recursively delete children and their content
  const children = Object.values(treeCache).filter(
    (item) => item.parentId === id
  );
  for (const child of children) {
    deleteTreeItemAndChildren(child.id);
  }

  // Delete the item itself and its content
  deleteContentByFileId(id);
  removeFileFromUser(itemToDelete.ownerId, itemToDelete.id);
  delete treeCache[id];

  writeTreeToFile(treeCache);
};
