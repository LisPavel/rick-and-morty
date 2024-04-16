import axios from "axios";
import { useEffect, useState } from "react";

type SearchType = "character" | "location" | "episode";

const baseUrl = "https://rickandmortyapi.com/api";
const axiosInstance = axios.create({ baseURL: baseUrl });

export function useGetData<T>(type: SearchType, page?: number) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const abortController = new AbortController();

    axiosInstance
      .get(`/${type}`, {
        params: page != null ? { page } : null,
        signal: abortController.signal,
      })
      .then((res) => {
        setHasMore(res.data.info.pages !== page);
        setData((prevState) => [...prevState, ...(res.data?.results ?? [])]);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => abortController.abort();
  }, [page, type]);

  return {
    loading,
    data,
    error,
    hasMore,
  };
}
