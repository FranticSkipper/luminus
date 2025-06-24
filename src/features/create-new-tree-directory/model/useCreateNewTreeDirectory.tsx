import { useAppSelector } from "@app/store/hooks/useAppSelector";
import { useCreateNewFileMutation } from "@entities/file-tree/api/fileTreeApi";
import type { DirectoryTree } from "@shared/model/types";

export function useCreateNewTreeDirectory() {
  const userID = useAppSelector((state) => state.authSlice.user?.id);
  const [createDirectiion] = useCreateNewFileMutation();

  function createDirectory() {
    if (!userID) {
      return;
    }

    const newItem: DirectoryTree = {
      name: "Blank",
      type: "directory",
      parentId: null,
      ownerId: userID,
    };

    createDirectiion(newItem);
  }

  return { createDirectory };
}
