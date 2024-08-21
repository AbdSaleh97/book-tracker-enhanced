'use client';
import { useState, useEffect } from 'react';
import RegisterBookForm from "./components/Form";
import BookCards from "./components/BookCard";
import Hero from "./components/Hero";
import { books as initialBooks } from './data/Books';
import useSortedBooks from './custom_hook/useSortedBooks';

export default function Home() {
  const [books, setBooks] = useState(initialBooks);
  const sortedBooks = useSortedBooks(books);
  
  const addNewBook = (newBook) => {
      setBooks((prevBooks) => [...prevBooks, newBook]);
  };
    return (
        <>
            <Hero />
            <RegisterBookForm addNewBook={addNewBook} />
            <BookCards books={sortedBooks} />
        </>
    );
}
