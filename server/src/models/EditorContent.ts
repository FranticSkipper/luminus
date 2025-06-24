export interface EditorContent {
  id: string; // A unique ID for the content entry itself
  fileId: string; // The ID of the file this content belongs to
  content: string; // The actual text content
  lastModified: string; // ISO date string for when it was last updated
  version: number; // A number to track content versions
  parentId: string | null; // The parent file's id
  userId: string; // The ID of the user who owns this content
}

// In-memory storage for editor content (in a real app, this would be a database)
export const editorContentStore: Map<string, EditorContent> = new Map();

// Initialize with some dummy data
editorContentStore.set("3", {
  id: "content-1",
  fileId: "3", // index.ts
  content: "console.log('Hello, World!');",
  lastModified: new Date().toISOString(),
  version: 1,
  parentId: null,
  userId: "user-1",
});

editorContentStore.set("5", {
  id: "content-2",
  fileId: "5", // Button.tsx
  content:
    "import React from 'react';\n\nexport const Button = () => {\n  return <button>Click me</button>;\n};",
  lastModified: new Date().toISOString(),
  version: 1,
  parentId: null,
  userId: "user-2",
});

editorContentStore.set("7", {
  id: "content-3",
  fileId: "7", // index.html
  content:
    "<!DOCTYPE html>\n<html>\n<head>\n  <title>My App</title>\n</head>\n<body>\n  <div id='root'></div>\n</body>\n</html>",
  lastModified: new Date().toISOString(),
  version: 1,
  parentId: null,
  userId: "user-3",
});
