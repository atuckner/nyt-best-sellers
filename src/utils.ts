export const calculateAspectRatio = (width: number, height: number) => {
  if (height === 0) return 0;

  return width / height;
};

export const formatWeeksOnList = (weeks: number) => {
  if (weeks === 1) return "New";

  return `${weeks} ${pluralize("Week", weeks)}`;
};

export const pluralize = (singular: string, quantity: number) => {
  return quantity == 1 ? singular : `${singular}s`;
};
