import { useLazySearchQuery } from "@entities/search-bar/api/api";
import { useState } from "react";

export function useSearchFile() {
  const [keyword, setKeyword] = useState<string>("");
  const [trigger, { data, isLoading, isError }] = useLazySearchQuery();

  async function searchRequest() {
    if (!keyword.length) {
      return;
    }
    trigger(keyword);
  }

  return { setKeyword, searchRequest, values: { keyword, isLoading } };
}
