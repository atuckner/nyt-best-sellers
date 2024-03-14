type BookRankProps = {
  rank: number;
};

const BookRank = ({ rank }: BookRankProps) => {
  let rankClass = "rank-high";

  if (rank >= 6 && rank < 11) {
    rankClass = "rank-mid";
  }

  if (rank >= 11 && rank <= 15) {
    rankClass = "rank-low";
  }

  return <p className={`rank ${rankClass}`}>{`# ${rank}`}</p>;
};

export default BookRank;
