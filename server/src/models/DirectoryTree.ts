export interface DirectoryTreeItem {
  id: string;
  name: string;
  type: "file" | "directory";
  parentId: string | null;
  ownerId: string; // ID of the user who owns this item
}

export interface FileTreeItemWithChildren extends DirectoryTreeItem {
  children: FileTreeItemWithChildren[];
}
