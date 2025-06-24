import fs from "fs";
import path from "path";
import crypto from "crypto";
import { EditorContent } from "./EditorContent";

const CONTENT_FILE = path.join(__dirname, "../data/editorContent.json");

const ensureDataDirExists = () => {
  const dir = path.dirname(CONTENT_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const readContentFromFile = (): Record<string, EditorContent> => {
  ensureDataDirExists();
  try {
    if (fs.existsSync(CONTENT_FILE)) {
      const data = fs.readFileSync(CONTENT_FILE, "utf-8");
      if (data) {
        return JSON.parse(data);
      }
    }
  } catch {
    // Start fresh on error
  }
  return {};
};

const writeContentToFile = (content: Record<string, EditorContent>): void => {
  ensureDataDirExists();
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), "utf-8");
};

// The cache is keyed by fileId for quick lookups
const contentCache: Record<string, EditorContent> = readContentFromFile();

/**
 * Finds content for a given fileId.
 */
export const findContentByFileId = (
  fileId: string
): EditorContent | undefined => {
  return contentCache[fileId];
};

/**
 * Returns all content entries.
 */
export const getAllContent = (): EditorContent[] => {
  return Object.values(contentCache);
};

/**
 * Saves (creates or updates) content for a file.
 */
export const saveContent = (
  contentData: Omit<EditorContent, "id" | "lastModified" | "version">
): EditorContent => {
  const { fileId, content, parentId, userId } = contentData;
  const existing = contentCache[fileId];
  const now = new Date().toISOString();

  if (existing) {
    // Update existing content
    existing.content = content;
    existing.lastModified = now;
    existing.version++;
    existing.parentId = parentId;
    existing.userId = userId;
    writeContentToFile(contentCache);
    return existing;
  } else {
    // Create new content
    const newContent: EditorContent = {
      id: crypto.randomUUID(),
      fileId,
      content,
      lastModified: now,
      version: 1,
      parentId,
      userId,
    };
    contentCache[fileId] = newContent;
    writeContentToFile(contentCache);
    return newContent;
  }
};

/**
 * Deletes content associated with a fileId.
 */
export const deleteContentByFileId = (fileId: string): void => {
  if (contentCache[fileId]) {
    delete contentCache[fileId];
    writeContentToFile(contentCache);
  }
};
