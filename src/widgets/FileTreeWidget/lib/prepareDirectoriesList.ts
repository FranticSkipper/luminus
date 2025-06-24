import type {
  DirectoryTreeItem,
  FileTreeItemWithChildren,
} from "@entities/file-tree/model/types";

export function prepareDirectoriesList(
  list: DirectoryTreeItem[]
): FileTreeItemWithChildren[] {
  const map: Map<string, FileTreeItemWithChildren> = new Map();
  const result: FileTreeItemWithChildren[] = [];

  list.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });

  list.forEach((item) => {
    const newItem = map.get(item.id);

    if (!newItem) {
      return;
    }

    if (!item.parentId) {
      result.push(newItem);
    } else {
      const parent = map.get(item.parentId);

      if (parent) {
        parent.children.push(newItem);
      }
    }
  });

  return result;
}
