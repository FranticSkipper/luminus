import type { SearchResult } from "@entities/search-bar/model/types";
import styles from "./styles.module.scss";

interface Props {
  list: SearchResult[];
}

export function SearchList({ list }: Props) {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.id} className={styles.item}>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
