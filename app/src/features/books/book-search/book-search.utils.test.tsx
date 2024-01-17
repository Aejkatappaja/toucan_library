import { test, assert } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { useBookSearchStore } from './book-search.store';
import { useSearchHandler } from './book-search.utils';

test('useSearchHandler updates search in store', () => {
  const TestComponent = () => {
    const handleSearch = useSearchHandler();
    return <input onChange={handleSearch} />;
  };

  const { container } = render(<TestComponent />);
  const input = container.querySelector('input');

  if (input) {
    fireEvent.change(input, { target: { value: 'test' } });
    assert.equal(useBookSearchStore.getState().search, 'test');
  } else {
    assert.fail('Input element not found');
  }
});
