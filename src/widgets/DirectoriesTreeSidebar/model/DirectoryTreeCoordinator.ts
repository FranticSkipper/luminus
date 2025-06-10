import type { FC } from "react";
import { DirectoryStrategy } from "./DirectoryStrategy";
import { FileStrategy } from "./FileStrategy";
import type {
  IDirectoryTreeCoordinator,
  ITreeDirectoryStrategy,
} from "./types";

export class DirectoryTreeCoordinator implements IDirectoryTreeCoordinator {
  private treeDirectoryStrategies: Map<string, ITreeDirectoryStrategy> =
    new Map();

  constructor() {
    this.treeDirectoryStrategies.set("directory", new DirectoryStrategy());
    this.treeDirectoryStrategies.set("file", new FileStrategy());
  }

  get(name: string, dataList: any[]): FC | undefined {
    const strategy = this.treeDirectoryStrategies.get(name);

    return strategy?.render(dataList);
  }
}
