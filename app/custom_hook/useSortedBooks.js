// hooks/useSortedBooks.js
import { useMemo } from 'react';
import { books } from '../data/books'; // Adjust the import path according to your file structure

const useSortedBooks = () => {
  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  return sortedBooks;
};

export default useSortedBooks;
