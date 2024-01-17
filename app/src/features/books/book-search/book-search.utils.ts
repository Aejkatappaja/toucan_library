import React from 'react';
import { useBookSearchStore } from './book-search.store';

export function useSearchHandler() {
  const { setSearch } = useBookSearchStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  return handleSearch;
}
