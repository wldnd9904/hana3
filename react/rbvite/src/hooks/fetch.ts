import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(url, { signal })
      .then((res) => res.json())
      .then((json) => {
        setError("");
        setData(json as T);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort(); //강제중지
  }, [url]);

  return {
    data: data,
    error: error,
    isLoading: isLoading,
  };
}
