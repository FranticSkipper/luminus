import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";
import type { SortStrategy } from "./types";

export class SortCoordinator {
  private strategies: SortStrategy[] = [];

  constructor(strategies: SortStrategy[]) {
    this.strategies = strategies.slice();
  }

  process(list: FileTreeItemWithChildren[]) {
    const listToFilter = list.slice();

    return this.strategies.reduce(
      (prev, current) => current.sortItems(listToFilter),
      listToFilter
    );
  }
}
