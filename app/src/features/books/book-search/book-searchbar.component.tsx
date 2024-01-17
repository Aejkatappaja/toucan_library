import { Input } from '@/features/ui';
import React from 'react';
import { useSearchHandler } from './book-search.utils';

interface BookSearchbarProps {}

export const BookSearchbar: React.FC<BookSearchbarProps> = () => {
  return (
    <Input
      onChange={useSearchHandler()}
      htmlFor='search'
      type='text'
      placeholder='Rechercher'
    />
  );
};
