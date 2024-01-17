import { assert, test } from 'vitest';
import { filterBooks, replaceDashByComma } from './book-list.utils';

test('replaceDashByComma replaces dashes with commas', () => {
  const inputSentence = 'some-text-with-dashes';
  const expectedOutput = 'some, text, with, dashes';
  assert.equal(replaceDashByComma(inputSentence), expectedOutput);
});

test('replaceDashByComma handles empty or non-string input', () => {
  assert.equal(replaceDashByComma(''), '');
  //@ts-expect-error vitest
  assert.equal(replaceDashByComma(null), null);
});

const mockBooks = [
  { title: 'Book One', authors: 'Frank, Eric' },
  { title: 'Book Two', authors: 'Frank, Eric' },
];

test('filterBooks filters books based on search query', () => {
  const searchQuery = 'One';
  //@ts-expect-error vitest
  const filteredBooks = filterBooks(mockBooks, searchQuery);
  assert.equal(filteredBooks.length, 1);
  assert.equal(filteredBooks[0].title, 'Book One');
});

test('filterBooks returns all books when search query is less than 2 characters', () => {
  const searchQuery = 'O';
  //@ts-expect-error vitest
  const filteredBooks = filterBooks(mockBooks, searchQuery);
  assert.equal(filteredBooks.length, mockBooks.length);
});
