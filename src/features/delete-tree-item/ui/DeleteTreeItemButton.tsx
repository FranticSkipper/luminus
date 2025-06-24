import { useDeleteTreeItem } from "../model/useDeleteFileItem";
import deleteIcon from "@shared/assets/images/icons/delete.svg";
import styles from "./styles.module.scss";

interface Props {
  treeItemId: string;
}

export function DeleteTreeItemButton({ treeItemId }: Props) {
  const { deleteFile } = useDeleteTreeItem(treeItemId);

  return (
    <div className={styles.wrapper} onClick={deleteFile}>
      <img
        src={deleteIcon}
        alt="Delete"
        width={15}
        height={15}
        className={styles.image}
      />
    </div>
  );
}
