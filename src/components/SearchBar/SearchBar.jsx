import { useId } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const inputId = useId();
  return (
    <header>
      <form onSubmit={onSubmit} >
        <input
          id={inputId}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
