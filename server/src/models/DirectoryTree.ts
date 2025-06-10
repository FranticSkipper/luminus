export interface DirectoryTreeItem {
  id: string;
  name: string;
  type: "file" | "directory";
  children?: DirectoryTreeItem[];
  path: string;
}

export const dummyDirectoryTree: DirectoryTreeItem[] = [
  {
    id: "1",
    name: "src",
    type: "directory",
    path: "/src",
    children: [
      {
        id: "2",
        name: "components",
        type: "directory",
        path: "/src/components",
        children: [
          {
            id: "3",
            name: "Button.tsx",
            type: "file",
            path: "/src/components/Button.tsx",
          },
        ],
      },
      {
        id: "4",
        name: "utils",
        type: "directory",
        path: "/src/utils",
        children: [
          {
            id: "5",
            name: "helpers.ts",
            type: "file",
            path: "/src/utils/helpers.ts",
          },
        ],
      },
    ],
  },
];
