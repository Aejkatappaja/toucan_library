import React from 'react';
import { BooksCollection } from './book.interface';
import { useBookSearchStore } from '../book-search';
import config from '@/config';

export default function useBookList() {
  const { search } = useBookSearchStore();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<BooksCollection | []>([]);

  React.useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    const fetchBooks = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${config.BASE_URL}/books?title=${search}`,
        );

        const allBooks: BooksCollection = await response.json();

        setData(allBooks);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceSearch = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        fetchBooks();
      }, 500);
    };

    if (search !== undefined) {
      debounceSearch();
    } else {
      setData([]);
      setIsLoading(false);
    }

    return () => clearTimeout(debounceTimer);
  }, [search]);

  return { data, isLoading };
}
