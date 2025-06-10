import { CreateNewTreeDirectoryButton } from "@features/create-new-tree-directory/ui";
import { TreeDirectoryList } from "./ui/TreeDirectoryList";
import { useEffect } from "react";

interface TreeItem {
  id: string;
  name: string;
  type: "directory" | "file";
  children: TreeItem[];
}

const data: TreeItem[] = [
  {
    id: crypto.randomUUID(),
    name: "Project Alpha",
    type: "directory",
    children: [
      {
        id: crypto.randomUUID(),
        name: "src",
        type: "directory",
        children: [
          {
            id: crypto.randomUUID(),
            name: "components",
            type: "directory",
            children: [
              {
                id: crypto.randomUUID(),
                name: "Button.js",
                type: "file",
                children: [],
              },
              {
                id: crypto.randomUUID(),
                name: "Header.js",
                type: "file",
                children: [],
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: "pages",
            type: "directory",
            children: [
              {
                id: crypto.randomUUID(),
                name: "Home.js",
                type: "file",
                children: [],
              },
              {
                id: crypto.randomUUID(),
                name: "About.js",
                type: "file",
                children: [],
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: "utils",
            type: "directory",
            children: [
              {
                id: crypto.randomUUID(),
                name: "helpers.js",
                type: "file",
                children: [],
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: "App.js",
            type: "file",
            children: [],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "public",
        type: "directory",
        children: [
          {
            id: crypto.randomUUID(),
            name: "index.html",
            type: "file",
            children: [],
          },
          {
            id: crypto.randomUUID(),
            name: "assets",
            type: "directory",
            children: [
              {
                id: crypto.randomUUID(),
                name: "image.png",
                type: "file",
                children: [],
              },
              {
                id: crypto.randomUUID(),
                name: "icon.svg",
                type: "file",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "package.json",
        type: "file",
        children: [],
      },
      {
        id: crypto.randomUUID(),
        name: "README.md",
        type: "file",
        children: [],
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Documents",
    type: "directory",
    children: [
      {
        id: crypto.randomUUID(),
        name: "Reports",
        type: "directory",
        children: [
          {
            id: crypto.randomUUID(),
            name: "Q1_2024_Report.pdf",
            type: "file",
            children: [],
          },
          {
            id: crypto.randomUUID(),
            name: "Q2_2024_Report.pdf",
            type: "file",
            children: [],
          },
          {
            id: crypto.randomUUID(),
            name: "MeetingNotes.docx",
            type: "file",
            children: [],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "Presentations",
        type: "directory",
        children: [
          {
            id: crypto.randomUUID(),
            name: "Project_Pitch.pptx",
            type: "file",
            children: [],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        name: "My_Resume.pdf",
        type: "file",
        children: [],
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Empty_Folder",
    type: "directory",
    children: [],
  },
];

export function DirectoriesTreeSidebar() {
  useEffect(() => {
    fetch("http://localhost:3000/api/directory-tree")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
      });
  });

  return (
    <aside>
      <h2>Directories</h2>
      <TreeDirectoryList dataList={data} />
      <CreateNewTreeDirectoryButton />
    </aside>
  );
}
