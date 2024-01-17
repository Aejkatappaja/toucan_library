export interface Book {
  bookID: string;
  title: string;
  authors: string;
  average_rating: string;
  language_code: string;
  "# num_pages": string;
  ratings_count: string;
  text_reviews_count: string;
}

export type BooksCollection = Book[];
