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

const service = {
  getBooksFromCSV,
};

export default service;
