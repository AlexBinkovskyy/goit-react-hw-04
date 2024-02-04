import { useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {
  const [query, setQuery] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    const { input } = event.target.elements[0].value;
    setQuery(input);
    event.target.reset();
  };

  

  return <SearchBar onSubmit={onSubmit} />;
};
