import { BookBuyLink } from "../types";

type BookBuyLinksProps = {
  buyLinks: BookBuyLink[];
};

const BookBuyLinks = ({ buyLinks }: BookBuyLinksProps) => {
  return (
    <>
      {buyLinks.map((buyLink) => {
        return (
          <p className="buy-links" key={buyLink.name}>
            <a href={buyLink.url}>{buyLink.name}</a>
          </p>
        );
      })}
    </>
  );
};

export default BookBuyLinks;
