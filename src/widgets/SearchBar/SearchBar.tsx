import { SearchFileForm } from "@features/search-file/ui/SearchFileForm";
import { SearchResult } from "./ui/SearchResult/SearchResult";

import styles from "./styles.module.scss";

export function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <SearchFileForm />
      <SearchResult />
    </div>
  );
}
