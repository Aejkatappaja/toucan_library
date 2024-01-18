import service from "./books.service";
import { BooksCollection } from "./data/data.types";

jest.mock("fs");

describe("fuzzyFilteredBooks", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should filter books using fuzzy search based on provided options and title", () => {
    const mockBooks = [
      { id: "1", title: "The Quick Brown Fox" },
      { id: "2", title: "Jumped Over the Lazy Dog" },
    ];
    const mockOptions = { keys: ["title"] };
    const mockTitle = "quick fox";

    const result = service.fuzzyFilteredBooks({
      //@ts-expect-error
      books: mockBooks,
      //@ts-expect-error
      options: mockOptions,
      title: mockTitle,
    });

    expect(result).toEqual([{ id: "1", title: "The Quick Brown Fox" }]);
  });
});

it("should return an empty array if no matching books are found", () => {
  const mockBooks = [
    { id: "1", title: "The Quick Brown Fox" },
    { id: "2", title: "Jumped Over the Lazy Dog" },
  ];
  const mockOptions = { keys: ["title"] };
  const mockTitle = "nonexistent book";

  const result = service.fuzzyFilteredBooks({
    //@ts-expect-error
    books: mockBooks,
    //@ts-expect-error
    options: mockOptions,
    title: mockTitle,
  });

  expect(result).toEqual([]);
});

it("should handle an empty books array", () => {
  const mockBooks: BooksCollection = [];
  const mockOptions = { keys: ["title"] };
  const mockTitle = "quick fox";

  const result = service.fuzzyFilteredBooks({
    books: mockBooks,
    //@ts-expect-error
    options: mockOptions,
    title: mockTitle,
  });

  expect(result).toEqual([]);
});
