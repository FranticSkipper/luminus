import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";
import type { SortStrategy } from "./types";

export class SortCoordinator {
  private strategies: SortStrategy[] = [];

  constructor(strategies: SortStrategy[]) {
    this.strategies = strategies.slice();
  }

  process(list: DirectoryTreeItemWithChildren[]) {
    const listToFilter = list.slice();

    return this.strategies.reduce(
      (prev, current) => current.sortItems(listToFilter),
      listToFilter
    );
  }
}
