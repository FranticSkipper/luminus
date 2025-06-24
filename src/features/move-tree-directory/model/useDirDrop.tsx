import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";
import { useUpdateTreeDirectory } from "@features/update-tree-directory/model/useUpdateTreeDirectory";
import { ItemTypes } from "@shared/model/types";
import { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";

export function useDirDrop(parentID: string) {
  const { updateDirectory } = useUpdateTreeDirectory();
  const itemRef = useRef<HTMLDivElement>(null);
  const [, dropRef] = useDrop(() => ({
    accept: ItemTypes.DIRECTORY,
    drop: ({ item }: { item: FileTreeItemWithChildren }) => {
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
