import { useContext } from "react";
import { Link } from "wouter";
import { BookContext } from "../contexts/BookContext";
import BookImage from "../components/BookImage";
import BookBasicInfo from "../components/BookBasicInfo";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import { Book } from "../types";

const BOOK_IMG_MAX_WIDTH = "150px";

export const BookList = () => {
  const { books, error, loading } = useContext(BookContext);

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage />;

  return (
    <div className="card-grid">
      {books.map(
        ({
          author,
          book_image,
          book_image_height,
          book_image_width,
          primary_isbn10,
          rank,
          title,
          weeks_on_list,
        }: Book) => (
          <div
            className="card card-col-sm card-col-md card-col-lg list-stack"
            key={primary_isbn10}
          >
            <div className="list-book-image">
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
              <Link href={`books/${primary_isbn10}`}>See Details</Link>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
