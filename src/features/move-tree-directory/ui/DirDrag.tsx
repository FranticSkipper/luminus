import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";

import { useDirDrag } from "../model/useDirDrag";

interface Props {
  item: DirectoryTreeItemWithChildren;
  children: React.ReactNode;
}

export const DirDrag = ({ item, children }: Props) => {
  const { itemRef } = useDirDrag(item);

  return <div ref={itemRef}>{children}</div>;
};
