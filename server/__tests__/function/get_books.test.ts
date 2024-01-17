import { Request, Response } from "express";
import controller from "../../src/books/books.controller";
import service from "../../src/books/books.service";

jest.mock("../../src/books/books.service");

describe("getBooks", () => {
  test("should successfully get books", async () => {
    const fakeData = [{ title: "Book 1", author: "Author 1" }];
    (service.getBooksFromCSV as jest.Mock).mockResolvedValueOnce(fakeData);

    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await controller.getBooks(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(fakeData);
  });

  test("should handle failure to get books", async () => {
    (service.getBooksFromCSV as jest.Mock).mockRejectedValueOnce(
      new Error("Fake error")
    );

    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await controller.getBooks(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });
});
