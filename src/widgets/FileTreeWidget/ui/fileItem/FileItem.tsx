import { DirDrag } from "@features/move-tree-directory/ui/DirDrag";
import { DeleteTreeItemButton } from "@features/delete-tree-item/ui/DeleteTreeItemButton";
import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";
import styles from "./styles.module.scss";

interface Props {
  fileItem: FileTreeItemWithChildren;
}

export function FileItem({ fileItem }: Props) {
  return (
    <DirDrag item={fileItem}>
      <li className={styles.wrapper}>
        <div className={styles.fileName}>
          <span className={styles.fileIcon}>📄</span>
          {fileItem.name}
        </div>
        <div className={styles.actions}>
          <DeleteTreeItemButton treeItemId={fileItem.id} />
        </div>
      </li>
    </DirDrag>
  );
}
