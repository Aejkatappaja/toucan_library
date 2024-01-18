import fs from "fs";

import csvParser from "csv-parser";
import { BooksCollection, Book } from "./data/data.types";
import Fuse from "fuse.js";
import { FuzzySearchRequiredInfos } from "./books.service.types";

const getBooksFromCSV = (filePath: string): Promise<BooksCollection> => {
  return new Promise((resolve, reject) => {
    const csvData: BooksCollection = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (row: Book) => {
        csvData.push(row);
      })
      .on("end", () => {
        resolve(csvData);
      })
      .on("error", (error) => {
        console.error(error);
        reject(`Error reading CSV file: ${error.message}`);
      });
  });
};

const filteredBooks = (books: BooksCollection, title: string) => {
  return title.length > 2
    ? books.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      )
    : books;
};

const fuzzyFilteredBooks = ({
  books,
  options,
  title,
}: FuzzySearchRequiredInfos): BooksCollection => {
  const fuse = new Fuse(books, options);
  const fuzzySearchResults = fuse.search(title);
  const filteredResult = fuzzySearchResults.map((result) => result.item);
  return filteredResult;
};

const service = {
  getBooksFromCSV,
  fuzzyFilteredBooks,
  filteredBooks,
};

export default service;
