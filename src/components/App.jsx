import { useEffect, useRef, useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchQuery } from './apiService/query';
import toast, { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

export const App = () => {
  const [queryString, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  const errorText = useRef(null);

  const onSubmit = event => {
    event.preventDefault();
    const input = event.target.elements[0].value;
    if (!input.trim()) {
      toast.error('Потрібно заповнити поле вводу!');
    }
    setPage(1);
    setImages([]);
    setIsVisible(false);
    setIsError(false);
    errorText.current = null;
    setQuery(input);
    event.target.reset();
  };

  useEffect(() => {
    if (!queryString) return;
    setIsVisible(true);
    fetchQuery(queryString, page)
      .then(response => {
        const { results } = response;
        results.length > 0
          ? setImages(prev => [...prev, ...results])
          : (setIsError(true),
            (errorText.current = 'By your query there is nothing to show...'));
      })
      .catch(() => {setIsError(true); (errorText.current = 'Something went wrong...')})
      .finally(() => setIsVisible(false));
  }, [queryString, page]);

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <Toaster position="top-right" reverseOrder={true} />
      {isError ? (
        <ErrorMessage data={errorText.current} />
      ) : (
        <ImageGallery images={images} />
      )}
      {<Loader visible={isVisible} />}
    </div>
  );
};
