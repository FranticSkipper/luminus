import type { ItemTypes } from "@shared/model/types";

export interface SearchState {
  query: string;
  searchResult: SearchResult[];
  isLoading: boolean;
  isError: boolean;
}

export interface SearchResult {
  id: string;
  name: string;
  type: ItemTypes;
  parentId: string;
}
