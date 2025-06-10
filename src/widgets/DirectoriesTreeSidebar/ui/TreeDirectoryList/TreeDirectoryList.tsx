import { TreeDirectoryDir } from "../TreeDirectoryDir/TreeDirectoryDir";
import { TreeDirectoryFile } from "../TreeDirectoryFile";
import styles from "./styles.module.scss";

export function TreeDirectoryList({ dataList }) {
  return (
    <ul className={styles.list}>
      {dataList.map((item) => {
        switch (item.type) {
          case "directory":
            return (
              <TreeDirectoryDir
                key={item.id}
                name={item.name}
                children={item.children}
              />
            );
          case "file":
            return (
              <TreeDirectoryFile key={item.id}>{item.name}</TreeDirectoryFile>
            );
          default:
            return;
        }
      })}
    </ul>
  );
}
