import { Request, Response } from "express";
import controller from "./books.controller";
import service from "./books.service";

jest.mock("./books.service");

describe("getBooks controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {
      query: {},
    };

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should handle service error and return 400 status", async () => {
    (service.getBooksFromCSV as jest.Mock).mockRejectedValueOnce(
      new Error("Mock service error")
    );

    await controller.getBooks(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: "Mock service error",
    });
  });

  it("should handle unknown error and return 500 status", async () => {
    (service.getBooksFromCSV as jest.Mock).mockRejectedValueOnce({});

    await controller.getBooks(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: "Internal Server Error",
    });
  });
});
