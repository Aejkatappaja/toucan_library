import fs from "fs";

import csvParser from "csv-parser";
import { BooksCollection, Book } from "./data/data.types";

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

const service = {
  getBooksFromCSV,
  filteredBooks,
};

export default service;
