import { BooksCollection } from "./data/data.types";

export interface FuseOptions {
  keys: string[];
  includeScore: boolean;
  threshold: number;
}

export interface FuzzySearchRequiredInfos {
  books: BooksCollection;
  options: FuseOptions;
  title: string;
}
