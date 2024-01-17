import path from "path";
import service from "../../src/books/books.service";

describe("getBooksFromCSV", () => {
  it("should correctly read and parse CSV file", async () => {
    const filePath = path.resolve(__dirname, "./books_test.csv");
    const result = await service.getBooksFromCSV(filePath);
    expect(result).toEqual([
      {
        bookID: "1",
        title: "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
        authors: "J.K. Rowling",
        average_rating: "4.56",
        language_code: "eng",
        "# num_pages": "652",
        ratings_count: "1944099",
        text_reviews_count: "26249",
      },
      {
        bookID: "2",
        title: "Harry Potter and the Order of the Phoenix (Harry Potter  #5)",
        authors: "J.K. Rowling",
        average_rating: "4.49",
        language_code: "eng",
        "# num_pages": "870",
        ratings_count: "1996446",
        text_reviews_count: "27613",
      },
    ]);
  });
});
