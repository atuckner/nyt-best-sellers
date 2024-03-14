import BookRank from "./BookRank";
import WeeksOnList from "../components/WeeksOnList";

type BookBasicInfoProps = {
  rank: number;
  title: string;
  author: string;
  weeks_on_list: number;
};

const BookBasicInfo = ({
  rank,
  title,
  author,
  weeks_on_list,
}: BookBasicInfoProps) => {
  return (
    <>
      <BookRank rank={rank} />
      <p className="book-title">{title}</p>
      <p className="author-name">by {author}</p>
      <WeeksOnList weeks={weeks_on_list} />
    </>
  );
};

export default BookBasicInfo;
