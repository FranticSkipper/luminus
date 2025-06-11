export interface DirectoryTreeItem {
  id: string;
  name: string;
  type: "file" | "directory";
  parentId: string | null;
}

export const dummyDirectoryTree: DirectoryTreeItem[] = [
  {
    id: "1",
    name: "root",
    type: "directory",
    parentId: null,
  },
  {
    id: "2",
    name: "src",
    type: "directory",
    parentId: "1",
  },
  {
    id: "3",
    name: "index.ts",
    type: "file",
    parentId: "2",
  },
  {
    id: "4",
    name: "components",
    type: "directory",
    parentId: "2",
  },
  {
    id: "5",
    name: "Button.tsx",
    type: "file",
    parentId: "4",
  },
  {
    id: "6",
    name: "public",
    type: "directory",
    parentId: "1",
  },
  {
    id: "7",
    name: "index.html",
    type: "file",
    parentId: "6",
  },
];
