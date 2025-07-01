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

  function renderListItem(item: FileTreeItemWithChildren) {
    switch (item.type) {
      case "directory":
        return <DirectoryItem key={item.id} directoryItem={item} />;
      case "file":
        return <FileItem key={item.id} fileItem={item} />;
      default:
        return null;
    }
  }

  return (
    <ul className={isNested ? styles.nestedList : styles.list}>
      {filteredByTypeList.map((item) => renderListItem(item))}
    </ul>
  );
}
