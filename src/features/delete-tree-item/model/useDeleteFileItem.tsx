import { useDeleteTreeItemMutation } from "@entities/file-tree/api/fileTreeApi";

export function useDeleteTreeItem(treeItemId: string) {
  const [deleteItem] = useDeleteTreeItemMutation();

  function deleteFile(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();

    deleteItem(treeItemId);
  }

  return { deleteFile };
}
