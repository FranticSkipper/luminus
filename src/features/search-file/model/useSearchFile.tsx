import { useLazySearchQuery } from "@entities/search-bar/api/api";
import {
  setSearchLoading,
  setSearchQuery,
  setSearchResult,
} from "@entities/search-bar/slice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@app/store/hooks/useAppDispatch";

export function useSearchFile() {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState<string>("");
  const [trigger, { data, isLoading, isError }] = useLazySearchQuery();

  async function searchRequest() {
    if (!query.length) {
      return;
    }

    dispatch(setSearchQuery(query));

    trigger(query);
  }

  useEffect(() => {
    if (data?.data) {
      dispatch(setSearchResult(data.data));
    }
  });

  useEffect(() => {
    dispatch(setSearchLoading(isLoading));
  }, [isLoading, dispatch]);

  useEffect(() => {
    dispatch(setSearchLoading(isError));
  }, [isError, dispatch]);

  return {
    setKeyword: setQuery,
    searchRequest,
    values: { keyword: query, data, isLoading, isError },
  };
}
