import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";
import { useUpdateTreeDirectory } from "@features/update-tree-directory/model/useUpdateTreeDirectory";
import { ItemTypes } from "@shared/model/TreeDirectoryDnd/ItemTypes";
import { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";

export function useDirDrop(parentID: string) {
  const { updateDirectory } = useUpdateTreeDirectory();
  const itemRef = useRef<HTMLDivElement>(null);
  const [, dropRef] = useDrop(() => ({
    accept: ItemTypes.DIRECTORY,
    drop: ({ item }: { item: DirectoryTreeItemWithChildren }) => {
      if (parentID === item.id) {
        return;
      }

      updateDirectory(item, parentID);
    },
  }));

  useEffect(() => {
    if (itemRef.current) {
      dropRef(itemRef.current);
    }
  }, [dropRef]);

  return { itemRef };
}
