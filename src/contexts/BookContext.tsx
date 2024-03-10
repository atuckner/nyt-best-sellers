import { createContext, useEffect, useState, ReactNode } from "react";
import { getBestSellers } from "../api";
import { Book } from "../types";

type BookContextProps = {
  children?: ReactNode;
};

type BookContextData = {
  books: Book[];
  loading: boolean;
  error?: string;
};

export const BookContext = createContext<BookContextData>({
  books: [],
  loading: false,
  error: undefined,
});

const BookProvider = ({ children }: BookContextProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);

        const response = await getBestSellers();
        const json = await response.json();

        if (!response.ok) {
          throw new Error(`${response.statusText} ${response.status}`);
        }

        setBooks(json.results.books);
        setLoading(false);
      } catch (e) {
        if (e instanceof Error) setError(e.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, loading, error }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
