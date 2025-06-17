import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";

export type ItemType = "file" | "directory";

export interface FileItems {
  id: string;
  name: string;
  type: ItemType;
  parentId: string | null;
}

export interface SortStrategy {
  sortItems: (
    list: DirectoryTreeItemWithChildren[]
  ) => DirectoryTreeItemWithChildren[];
}
