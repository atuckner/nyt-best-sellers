import { calculateAspectRatio } from "../utils";

type BookImageProps = {
  imageWidth: number;
  imageHeight: number;
  maxWidth: string;
  imageUrl: string;
};

const BookImage = ({
  imageWidth,
  imageHeight,
  maxWidth,
  imageUrl,
}: BookImageProps) => {
  return (
    <img
      style={{
        aspectRatio: calculateAspectRatio(imageWidth, imageHeight),
        maxWidth: maxWidth,
      }}
      src={imageUrl}
    ></img>
  );
};

export default BookImage;
