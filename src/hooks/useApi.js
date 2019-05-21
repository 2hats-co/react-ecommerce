import { useState, useEffect } from 'react';
import { API_URL } from '../constants/api';

function useApi(initialQuery) {
  const [query, setQuery] = useState(initialQuery);

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  console.log('useAPI was called', query, isLoading, items.length);

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
