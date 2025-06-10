import { useState } from "react";
import { DirectoryButton } from "../DirectoryButton/DirectoryButton";
import { TreeDirectoryList } from "../TreeDirectoryList";
import { DirDrag } from "@features/drag-and-drop /drag/tree-directory/dir-drag/ui/DirDrag";
import { DirDrop } from "@features/drag-and-drop /drop/tree-directory/dir-drop/DirDrop";

export function TreeDirectoryDir({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DirDrop>
      <DirDrag id={item.id}>
        <li>
          <DirectoryButton onClick={() => setIsOpen(!isOpen)}>
            <span>{item.name}</span>
          </DirectoryButton>
          {item.children.length && isOpen ? (
            <TreeDirectoryList dataList={item.children} />
          ) : null}
        </li>
      </DirDrag>
    </DirDrop>
  );
}
