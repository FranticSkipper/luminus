import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";
import { ItemTypes } from "@shared/model/types";
import { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";

export function useDirDrag(item: FileTreeItemWithChildren) {
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
