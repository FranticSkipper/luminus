import { ItemTypes } from "@shared/model/TreeDirectoryDnd/ItemTypes";
import { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";

export const DirDrop = ({ children }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [, dropRef] = useDrop(() => ({
    accept: ItemTypes.DIRECTORY,
    drop: (item) => {
      //TODO: add function of adding dir to another directory
    },
  }));

  useEffect(() => {
    if (itemRef.current) {
      dropRef(itemRef.current);
    }
  }, [dropRef]);

  return <div ref={itemRef}>{children}</div>;
};
