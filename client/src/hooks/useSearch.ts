import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { BlogPost } from '@/data/blogPosts';

interface UseSearchProps {
  data: BlogPost[];
  keys: string[];
}

export function useSearch({ data, keys }: UseSearchProps) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys,
        threshold: 0.3,
        includeScore: true,
        includeMatches: true,
      }),
    [data, keys]
  );

  const results = useMemo(() => {
    if (!query.trim()) return data;
    
    const searchResults = fuse.search(query);
    return searchResults.map(result => result.item);
  }, [fuse, query, data]);

  return {
    query,
    setQuery,
    results,
  };
}
