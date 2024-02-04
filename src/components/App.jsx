import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchQuery } from './apiService/query';
import toast, { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [queryString, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false)

  const onSubmit = event => {
    event.preventDefault();
    const input = event.target.elements[0].value;
    if (!input.trim()) {
      toast.error('Потрібно заповнити поле вводу!');
    }
    setQuery(input);
    event.target.reset();
  };

  useEffect(() => {
    if (!queryString) return;
    setIsVisible(true)
    fetchQuery(queryString, page)
      .then(response => {
        const { results } = response;
        console.log(results);
        setImages(prev => [...prev, ...results]);
      })
      .catch(err => console.log(err))
      .finally(()=>setIsVisible(false));
  }, [queryString, page]);

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <Toaster position="top-right" reverseOrder={true} />
      <ImageGallery images={images} />
      {isVisible && <Loader/>}
    </div>
  );
};
