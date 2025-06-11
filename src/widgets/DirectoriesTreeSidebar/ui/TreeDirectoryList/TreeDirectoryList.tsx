import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";
import { TreeDirectoryDir } from "../TreeDirectoryDir/TreeDirectoryDir";
import { TreeDirectoryFile } from "../TreeDirectoryFile";
import styles from "./styles.module.scss";

interface Props {
  itemList: DirectoryTreeItemWithChildren[];
}

export function TreeDirectoryList({ itemList }: Props) {
  return (
    <ul className={styles.list}>
      {itemList.map((item) => {
        switch (item.type) {
          case "directory":
            return <TreeDirectoryDir key={item.id} directoryItem={item} />;
          case "file":
            return <TreeDirectoryFile key={item.id} fileItem={item} />;
          default:
            return;
        }
      })}
    </ul>
  );
}
