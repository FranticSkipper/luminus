export interface FileTreeState {
  files: FileTreeItem[];
}

export interface FileTreeItem {
  id: string;
  name: string;
  type: "file" | "directory";
  parentId: string | null;
}

export interface FileTreeItemWithChildren extends FileTreeItem {
  children: FileTreeItemWithChildren[];
}
