import { useUpdateFileMutation } from "@entities/file-tree/api/fileTreeApi";
import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";

export function useUpdateTreeDirectory() {
  const [updatePost, result] = useUpdateFileMutation();

  function updateDirectory(
    item: FileTreeItemWithChildren,
    newParentId: string
  ) {
    updatePost({ ...item, parentId: newParentId });
  }

  return { updateDirectory };
}
