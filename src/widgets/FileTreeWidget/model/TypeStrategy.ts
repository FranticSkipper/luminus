import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";
import type { SortStrategy, ItemType } from "./types";

export class TypeSort implements SortStrategy {
  private priorityType: ItemType[] = [];

  constructor(types: ItemType[]) {
    this.priorityType = types.slice();
  }

  sortItems(list: FileTreeItemWithChildren[]) {
    const listToFilter = list.slice();

    listToFilter.sort((a, b) => {
      const indexA = this.priorityType.indexOf(a.type);
      const indexB = this.priorityType.indexOf(b.type);

      if (indexA === -1 && indexB === -1) {
        return 0;
      }
      if (indexA === -1) {
        return 1;
      }
      if (indexB === -1) {
        return -1;
      }

      return 0;
    });

    return listToFilter;
  }
}
