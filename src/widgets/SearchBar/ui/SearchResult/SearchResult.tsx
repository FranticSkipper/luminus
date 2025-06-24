import { useAppSelector } from "@app/store/hooks/useAppSelector";
import { SearchList } from "../SearchList/SearchList";

export function SearchResult() {
  const items = useAppSelector((state) => state.searchBarReducer.searchResult);

  return items.length ? <SearchList list={items} /> : null;
}
