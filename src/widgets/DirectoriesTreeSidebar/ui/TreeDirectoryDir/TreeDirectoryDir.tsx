import { useState } from "react";
import { DirDrag } from "@features/move-tree-directory/ui/DirDrag";
import { DirDrop } from "@features/move-tree-directory/ui/DirDrop";
import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";
import { DirectoryButton } from "../DirectoryButton/DirectoryButton";
import { TreeDirectoryList } from "../TreeDirectoryList";
import styles from "./styles.module.scss";

interface Props {
  directoryItem: DirectoryTreeItemWithChildren;
}

export function TreeDirectoryDir({ directoryItem }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles.item}>
      <DirDrop parentID={directoryItem.id}>
        <DirDrag item={directoryItem}>
          <DirectoryButton onClick={() => setIsOpen(!isOpen)}>
            <span>{directoryItem.name}</span>
          </DirectoryButton>
        </DirDrag>
      </DirDrop>

      {isOpen ? <TreeDirectoryList itemList={directoryItem.children} /> : null}
    </li>
  );
}
