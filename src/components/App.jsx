import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchQuery } from './apiService/query';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [queryString, setQuery] = useState('');
  const [page, setPage] = useState(1);

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
    fetchQuery(queryString, page);
  }); //.then().catch().finally()

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
};
