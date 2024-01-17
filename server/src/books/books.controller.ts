import path from "path";
import { Request, Response } from "express";
import { BooksCollection, Book } from "./data/data.types";
import service from "./books.service";

const getBooks = async (
  req: Request,
  res: Response<BooksCollection | { error: string }>
): Promise<void> => {
  try {
    const filePath = path.join(__dirname, "data", "books.csv");

    const csvData = await service.getBooksFromCSV(filePath);

    res.status(200).json(csvData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const controller = {
  getBooks,
};

export default controller;
