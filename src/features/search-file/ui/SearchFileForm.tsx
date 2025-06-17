import { useSearchFile } from "../model/useSearchFile";
import searchIcon from "@shared/assets/images/icons/search.png";
import loadingGif from "@shared/assets/gifs/loader.png";

import styles from "./styles.module.scss";

export function SearchFileForm() {
  const { setKeyword, searchRequest, values } = useSearchFile();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    searchRequest();
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.inner}>
        <input
          type="search"
          placeholder="Search files..."
          className={styles.input}
          name="keyword"
          value={values.keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button
          type="submit"
          className={styles.button}
          disabled={values.isLoading}
        >
          <img
            src={values.isLoading ? loadingGif : searchIcon}
            alt="#"
            width={20}
            height={20}
          />
        </button>
      </div>
    </form>
  );
}
