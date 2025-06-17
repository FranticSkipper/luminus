import type {
  DirectoryTreeItem,
  DirectoryTreeItemWithChildren,
} from "@entities/file-system/model/types";

export function prepareDirectoriesList(
  list: DirectoryTreeItem[]
): DirectoryTreeItemWithChildren[] {
  const map: Map<string, DirectoryTreeItemWithChildren> = new Map();
  const result: DirectoryTreeItemWithChildren[] = [];

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
