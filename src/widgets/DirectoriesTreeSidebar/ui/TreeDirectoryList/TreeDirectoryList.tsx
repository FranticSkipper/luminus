import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";
import { TreeDirectoryDir } from "../TreeDirectoryDir/TreeDirectoryDir";
import { TreeDirectoryFile } from "../TreeDirectoryFile";
import styles from "./styles.module.scss";
import { useMemo } from "react";
import { SortCoordinator } from "@widgets/DirectoriesTreeSidebar/model/SortCoordinator";
import { TypeSort } from "@widgets/DirectoriesTreeSidebar/model/TypeStrategy";

interface Props {
  itemList: DirectoryTreeItemWithChildren[];
}

export function TreeDirectoryList({ itemList }: Props) {
  const sortCooridnator = new SortCoordinator([new TypeSort(["directory"])]);
  const filteredByTypeList = useMemo(
    () => sortCooridnator.process(itemList),
    [itemList]
  );

  return (
    <ul className={styles.list}>
      {filteredByTypeList.map((item) => {
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
