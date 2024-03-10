export const getBestSellers = async () => {
  const path = "/svc/books/v3/lists/current/hardcover-fiction.json";

  return await fetch(
    `https://${import.meta.env.VITE_NYT_API_BASE_URL}${path}?api-key=${import.meta.env.VITE_NYT_API_KEY}`,
  );
};
