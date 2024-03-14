import { useContext } from "react";
import { Link } from "wouter";
import { BookContext } from "../contexts/BookContext";
import { Book } from "../types";
import BookImage from "../components/BookImage";
import BookBasicInfo from "../components/BookBasicInfo";
import BookBuyLinks from "../components/BookBuyLinks";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";

const BOOK_IMG_MAX_WIDTH = "200px";

type BookViewProps = {
  id: string;
};

export const BookView = ({ id }: BookViewProps) => {
  const { books, error, loading } = useContext(BookContext);

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage />;

  return (
    <div>
      {books
        .filter((book: Book) => book.primary_isbn10 === id)
        .map(
          ({
            author,
            book_image,
            book_image_height,
            book_image_width,
            buy_links,
            description,
            primary_isbn10,
            rank,
            title,
            weeks_on_list,
          }: Book) => (
            <div className="card show-stack" key={primary_isbn10}>
              <div className="show-book-image">
                <BookImage
                  imageWidth={book_image_width}
                  imageHeight={book_image_height}
                  maxWidth={BOOK_IMG_MAX_WIDTH}
                  imageUrl={book_image}
                />
              </div>
              <div className="card-content">
                <BookBasicInfo
                  rank={rank}
                  title={title}
                  author={author}
                  weeks_on_list={weeks_on_list}
                />
                <p>{description}</p>
                <BookBuyLinks buyLinks={buy_links} />
              </div>
              <div className="card-link">
                <Link href={"/"}>Back</Link>
              </div>
            </div>
          ),
        )}
    </div>
  );
};
