import { ImageCard } from '../ImageCard/ImageCard';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => {
        // console.log(image);
        const { small, regular, alt_description: alt } = image.urls;
        const refs = { small: small, regular: regular };
        return (
          <li key={image.id}>
            <ImageCard src={refs} alt={alt} />
          </li>
        );
      })}
    </ul>
  );
};
