import { useState } from "react";
import { DirDrag } from "@features/move-tree-directory/ui/DirDrag";
import { DirDrop } from "@features/move-tree-directory/ui/DirDrop";
import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";

import styles from "./styles.module.scss";
import { ItemsList } from "../itemsList";

interface Props {
  directoryItem: FileTreeItemWithChildren;
}

export function DirectoryItem({ directoryItem }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`${styles.item} ${isOpen ? styles.expanded : ""}`}>
      <DirDrop parentID={directoryItem.id}>
        <DirDrag item={directoryItem}>
          <div className={styles.directoryHeader} onClick={handleToggle}>
            <div className={styles.directoryName}>
              <span className={styles.directoryIcon}>
                {isOpen ? "📁" : "📂"}
              </span>
              {directoryItem.name}
            </div>
          </div>
        </DirDrag>
      </DirDrop>

      {isOpen && (
        <div className={styles.children}>
          <ItemsList itemList={directoryItem.children} />
        </div>
      )}
    </li>
  );
}
