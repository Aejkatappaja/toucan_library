import express from "express";
import controller from "./books.controller";

const bookRouter = express.Router();

bookRouter.get("/books", controller.getBooks);

export default bookRouter;
