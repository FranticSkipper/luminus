import type {
  DirectoryTreeItem,
  DirectoryTreeItemWithChildren,
} from "@entities/file-system/model/types";

export function prepareDirectoriesTreeArray(
  directoriesList: DirectoryTreeItem[]
) {
  const itemsMap = new Map<string, DirectoryTreeItemWithChildren>();
  const result: DirectoryTreeItemWithChildren[] = [];

  directoriesList.forEach((dir) => {
    itemsMap.set(dir.id, { ...dir, children: [] });
  });

  directoriesList.forEach((dir) => {
    const item = itemsMap.get(dir.id);

    if (item && !item?.parentId) {
      result.push(item);
    } else if (dir.parentId) {
      const parent = itemsMap.get(dir.parentId);

      if (parent && item) {
        parent.children.push(item);
      }
    }
  });

  return result;
}
