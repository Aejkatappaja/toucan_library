import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import bookRouter from "./books/books.route";

const app: Express = express();

const { PORT } = config;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ credentials: true }));

app.use(bookRouter);

app.get("/", (req: Request, res: Response) => {
  return res.send("Welcome to Toucan Books API !");
});

app.all("*", (req: Request, res: Response) => {
  return res.status(404).json("Not Found");
});

app.listen(PORT, () => {
  console.log("server started");
});
