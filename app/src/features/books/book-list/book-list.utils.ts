import { BooksCollection } from './book.interface';

export const replaceDashByComma = (sentence: string): string => {
  if (typeof sentence !== 'string' || !sentence) {
    return sentence;
  }
  return sentence.replace(/-/g, ', ');
};

export function filterBooks(
  books: BooksCollection,
  search: string,
): BooksCollection {
  return search.length > 2
    ? books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      )
    : books;
}
