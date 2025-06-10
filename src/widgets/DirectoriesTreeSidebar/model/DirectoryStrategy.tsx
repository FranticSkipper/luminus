import { TreeDirectoryList } from "../ui/TreeDirectoryList";
import type { ITreeDirectoryStrategy } from "./types";

export class DirectoryStrategy implements ITreeDirectoryStrategy {
  render(dataList) {
    return <TreeDirectoryList dataList={dataList} />;
  }
}
