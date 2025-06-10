import { OpenFileButton } from "@features/open-file/ui";
import { TreeDirectoryItem } from "../TreeDirectoryDir";

export function TreeDirectorySublist({ dataList }) {
  return (
    <ul className={styles.list}>
      {dataList.map((item) => {
        return item.type === "directory" ? (
          <TreeDirectoryItem
            key={item.id}
            name={item.name}
            children={item.children}
          />
        ) : (
          <OpenFileButton key={item.id}>
            <span>{item.name}</span>
          </OpenFileButton>
        );
      })}
    </ul>
  );
}
