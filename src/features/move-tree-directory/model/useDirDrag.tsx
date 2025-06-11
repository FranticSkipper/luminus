import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";
import { ItemTypes } from "@shared/model/TreeDirectoryDnd/ItemTypes";
import { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";

export function useDirDrag(item: DirectoryTreeItemWithChildren) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [, dragRef] = useDrag(() => ({
    type: ItemTypes.DIRECTORY,
    item: { item },
  }));

  useEffect(() => {
    if (itemRef.current) {
      dragRef(itemRef.current);
    }
  }, [dragRef]);

  return {
    itemRef,
  };
}
