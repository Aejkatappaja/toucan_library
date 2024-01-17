import service from "./books.service";
import { BooksCollection } from "./data/data.types";

describe("filteredBooks", () => {
  const mockBooks = [
    { id: "1", title: "The Quick Brown Fox" },
    { id: "2", title: "Jumped Over the Lazy Dog" },
    { id: "3", title: "Another Book" },
  ];

  it("should filter books based on title when title length is greater than 2", () => {
    //@ts-expect-error
    const result = service.filteredBooks(mockBooks, "quic");

    expect(result).toEqual([{ id: "1", title: "The Quick Brown Fox" }]);
  });

  it("should not filter books when title length is 2", () => {
    //@ts-expect-error
    const result = service.filteredBooks(mockBooks, "ab");

    expect(result).toEqual(mockBooks);
  });

  it("should not filter books when title length is less than 2", () => {
    //@ts-expect-error
    const result = service.filteredBooks(mockBooks, "");

    expect(result).toEqual(mockBooks);
  });

  it("should not filter books when title length is exactly 2", () => {
    //@ts-expect-error
    const result = service.filteredBooks(mockBooks, "ab");

    expect(result).toEqual(mockBooks);
  });

  it("should handle an empty array of books", () => {
    const emptyArray: BooksCollection = [];
    const result = service.filteredBooks(emptyArray, "some title");

    expect(result).toEqual([]);
  });
});
