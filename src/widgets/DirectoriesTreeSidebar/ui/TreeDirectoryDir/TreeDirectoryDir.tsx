import { useState } from "react";
import { DirectoryButton } from "../DirectoryButton/DirectoryButton";
import { TreeDirectoryList } from "../TreeDirectoryList";

export function TreeDirectoryDir({ name, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <DirectoryButton onClick={() => setIsOpen(!isOpen)}>
        <span>{name}</span>
      </DirectoryButton>
      {children.length && isOpen ? (
        <TreeDirectoryList dataList={children} />
      ) : null}
    </li>
  );
}
