import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";
import styles from "./styles.module.scss";
import { useMemo } from "react";
import { SortCoordinator } from "@widgets/FileTreeWidget/model/SortCoordinator";
import { TypeSort } from "@widgets/FileTreeWidget/model/TypeStrategy";
import { DirectoryItem } from "../directoryItem/DirectoryItem";
import { FileItem } from "../fileItem";

interface Props {
  itemList: FileTreeItemWithChildren[];
  isNested?: boolean;
}

export function ItemsList({ itemList, isNested = false }: Props) {
  const sortCooridnator = new SortCoordinator([new TypeSort(["directory"])]);
  const filteredByTypeList = useMemo(
    () => sortCooridnator.process(itemList),
    [itemList]
  );

  return (
    <ul className={isNested ? styles.nestedList : styles.list}>
      {filteredByTypeList.map((item) => {
        switch (item.type) {
          case "directory":
            return (
              <li key={item.id} className={styles.item}>
                <DirectoryItem directoryItem={item} />
              </li>
            );
          case "file":
            return (
              <li key={item.id} className={styles.item}>
                <FileItem fileItem={item} />
              </li>
            );
          default:
            return null;
        }
      })}
    </ul>
  );
}
