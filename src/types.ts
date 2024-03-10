export type BestsellersResponse = {
  copyright: string;
  last_modified: string;
  num_results: number;
  results: BestSellersResults;
  status: string;
};

export type BestSellersResults = {
  bestsellers_date: string;
  books: Book[];
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  next_published_date: string;
  normal_list_ends_at: number;
  previous_published_date: string;
  published_date: string;
  published_date_description: string;
  updated: string;
};

export type Book = {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  asterisk: number;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
  buy_links: BookBuyLink[];
  contributor: string;
  contributor_note: string;
  dagger: number;
  description: string;
  first_chapter_link: string;
  price: string;
  rank: number;
  primary_isbn10: string;
  publisher: string;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  weeks_on_list: number;
};

export type BookBuyLink = {
  name: string;
  url: string;
};
