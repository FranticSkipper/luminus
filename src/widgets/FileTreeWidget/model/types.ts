import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";

export type ItemType = "file" | "directory";

export interface FileItems {
  id: string;
  name: string;
  type: ItemType;
  parentId: string | null;
}

export interface SortStrategy {
  sortItems: (list: FileTreeItemWithChildren[]) => FileTreeItemWithChildren[];
}
