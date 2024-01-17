import request from "supertest";
import express from "express";
import bookRouter from "./books.route";
import service from "./books.service";

describe("Book Router", () => {
  const app = express();
  app.use("/api", bookRouter);

  it("should get all books when no title is provided", async () => {
    const response = await request(app).get("/api/books");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  it("should get filtered books when a title is provided", async () => {
    const response = await request(app)
      .get("/api/books")
      .query({ title: "quick fox" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  it("should handle errors and return 400 status", async () => {
    jest
      .spyOn(service, "getBooksFromCSV")
      .mockRejectedValueOnce(new Error("Mock service error"));

    const response = await request(app).get("/api/books");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Mock service error" });
  });

  it("should handle unknown errors and return 500 status", async () => {
    jest.spyOn(service, "getBooksFromCSV").mockRejectedValueOnce({});

    const response = await request(app).get("/api/books");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: "Internal Server Error" });
  });
});
