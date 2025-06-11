import type { DirectoryTreeItemWithChildren } from "@entities/file-system/model/types";
import { DirDrag } from "@features/move-tree-directory/ui/DirDrag";
import { OpenFileButton } from "@features/open-file/ui";

interface Props {
  fileItem: DirectoryTreeItemWithChildren;
}

export function TreeDirectoryFile({ fileItem }: Props) {
  return (
    <DirDrag item={fileItem}>
      <OpenFileButton>
        <span>{fileItem.name}</span>
      </OpenFileButton>
    </DirDrag>
  );
}
