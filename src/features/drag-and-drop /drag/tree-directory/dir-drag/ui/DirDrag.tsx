import { ItemTypes } from "@shared/model/TreeDirectoryDnd/ItemTypes";
import { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";

export const DirDrag = ({ id, children }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [, dragRef] = useDrag(() => ({
    type: ItemTypes.DIRECTORY,
    item: { id },
  }));

  useEffect(() => {
    if (itemRef.current) {
      dragRef(itemRef.current);
    }
  }, [dragRef]);

  return <div ref={itemRef}>{children}</div>;
};
