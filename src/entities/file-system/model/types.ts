export interface DirectoryTreeState {
  items: DirectoryTreeItem[];
}

export interface DirectoryTreeItem {
  id: string;
  name: string;
  type: "file" | "directory";
  parentId: string | null;
}

export interface DirectoryTreeItemWithChildren extends DirectoryTreeItem {
  children: DirectoryTreeItemWithChildren[];
}
