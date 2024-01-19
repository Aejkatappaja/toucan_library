import { useSearchHandler } from './book-search.utils';
import * as BookSearchStoreModule from './book-search.store';

jest.mock('./book-search.store');

describe('useSearchHandler', () => {
  it('should set search value when handleSearch is called', () => {
    const setSearchMock = jest.fn();
    jest.spyOn(BookSearchStoreModule, 'useBookSearchStore').mockReturnValue({
      setSearch: setSearchMock,
    });

    const handleSearch = useSearchHandler();

    handleSearch({
      target: { value: 'test' },
    } as React.ChangeEvent<HTMLInputElement>);

    expect(setSearchMock).toHaveBeenCalledWith('test');
  });
});
