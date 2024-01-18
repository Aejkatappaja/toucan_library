import path from "path";
import { Request, Response } from "express";
import { BooksCollection } from "./data/data.types";
import service from "./books.service";
import { QueryTitleDto } from "./dto/query.title.dto";
import { replaceDashByComma } from "./books.utils";

const getBooks = async (
  req: Request<object, object, QueryTitleDto | null>,
  res: Response<BooksCollection | { error: string }>
): Promise<void> => {
  try {
    const filePath = path.join(__dirname, "data", "books.csv");

    const csvData = await service.getBooksFromCSV(filePath);

    const books = csvData.map((book) => ({
      ...book,
      authors: replaceDashByComma(book.authors),
    }));

    const title = req.query.title as string;
    if (!title || title.trim().length === 0) {
      res.status(200).json(books);
      return;
    }

    const options = {
      keys: ["title"],
      includeScore: true,
      threshold: 0.4,
    };

    const filteredBooks = service.fuzzyFilteredBooks({
      books,
      options,
      title,
    });

    res.status(200).json(filteredBooks);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      console.error("Unknown error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const controller = {
  getBooks,
};

export default controller;
