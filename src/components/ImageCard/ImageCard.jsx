import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';

export const ImageCard = ({ src, alt, regular }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <img src={src.small} alt={alt} onClick={openModal} />
      {modalIsOpen && <ImageModal alt={alt} regular={regular} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen}/>}
    </div>
  );
};
