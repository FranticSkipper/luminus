export interface DirectoryTreeItem {
  id: string;
  name: string;
  type: "file" | "directory";
  children?: DirectoryTreeItem[];
  path: string;
}

export interface DirectoryTreeResponse {
  status: string;
  data: DirectoryTreeItem[];
}
