import { useState, useEffect } from 'react';
const API_URL = process.env.REACT_APP_API_URL;

function useApi(initialQuery) {
  const [query, setQuery] = useState(initialQuery);

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(API_URL + query);
      const data = await res.json();
      setItems(data);
      setIsLoading(false);
    })();
  }, [query]);

  return [items, isLoading, setQuery];
}

export default useApi;
