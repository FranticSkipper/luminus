import { TreeDirectoryFile } from "../ui/TreeDirectoryFile";
import type { ITreeDirectoryStrategy } from "./types";

export class FileStrategy implements ITreeDirectoryStrategy {
  render(dataList) {
    return <TreeDirectoryFile dataList={dataList} />;
  }
}
