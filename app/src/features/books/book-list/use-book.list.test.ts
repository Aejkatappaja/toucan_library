import { renderHook, act } from '@testing-library/react';

import { useBookSearchStore } from '../book-search';
import useBookList from './use-book-list';

//@ts-expect-error jest
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: '1', title: 'The Quick Brown Fox' },
        { id: '2', title: 'Jumped Over the Lazy Dog' },
      ]),
  }),
);

test('should fetch books and update state on successful search', async () => {
  //@ts-expect-error jest
  const { result, waitForNextUpdate } = renderHook(() => useBookList());
  act(() => {
    useBookSearchStore.setState({ search: 'Harry Potter' });
  });

  await waitForNextUpdate();

  expect(result.current.data).toEqual([
    { id: '1', title: 'The Quick Brown Fox' },
    { id: '2', title: 'Jumped Over the Lazy Dog' },
  ]);
  expect(result.current.isLoading).toBe(false);
});
