import type { FileTreeItemWithChildren } from "@entities/file-tree/model/types";

import { useDirDrag } from "../model/useDirDrag";

interface Props {
  item: FileTreeItemWithChildren;
  children: React.ReactNode;
}

export const DirDrag = ({ item, children }: Props) => {
  const { itemRef } = useDirDrag(item);

  return <div ref={itemRef}>{children}</div>;
};
