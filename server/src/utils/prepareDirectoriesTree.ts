import type { DirectoryTreeItem } from "../models/DirectoryTree";

interface FileTreeItemWithChildren extends DirectoryTreeItem {
  children: FileTreeItemWithChildren[];
}

export const prepareDirectoriesTree = (
  items: DirectoryTreeItem[]
): FileTreeItemWithChildren[] => {
  // Create a map for quick access to items with children
  const itemMap = new Map<string, FileTreeItemWithChildren>();
  const result: FileTreeItemWithChildren[] = [];

  // First pass: create all items with empty children arrays
  items.forEach((item) => {
    itemMap.set(item.id, { ...item, children: [] });
  });

  // Second pass: build the tree structure
  items.forEach((item) => {
    const itemWithChildren = itemMap.get(item.id)!;
    if (item.parentId === null) {
      result.push(itemWithChildren);
    } else {
      const parent = itemMap.get(item.parentId);
      if (parent) {
        parent.children.push(itemWithChildren);
      }
    }
  });

  return result;
};
