import { useUpdateDirectoryMutation } from "@entities/file-system/api/fileSystemApi";
import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";

export function useUpdateTreeDirectory() {
  const [updatePost, result] = useUpdateDirectoryMutation();

  function updateDirectory(
    item: DirectoryTreeItemWithChildren,
    newParentId: string
  ) {
    updatePost({ ...item, parentId: newParentId });
  }

  return { updateDirectory };
}
