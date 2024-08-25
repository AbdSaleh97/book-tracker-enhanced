'use client';
import { useState, useEffect, useContext } from 'react';
import RegisterBookForm from "./components/Form";
import BookCards from "./components/BookCard";
import Hero from "./components/Hero";
import { books as initialBooks } from './data/Books';
import useSortedBooks from './custom_hook/useSortedBooks';
import LoginForm from './components/LoginForm';
import { AuthContext } from './components/context/auth';



export default function Home() {
    const [books, setBooks] = useState(initialBooks);
    const sortedBooks = useSortedBooks(books);
    const { token } = useContext(AuthContext)

    const addNewBook = (newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };
    return (
        <div>
            {token ? <> <Hero />
                <RegisterBookForm addNewBook={addNewBook} />
                <BookCards books={sortedBooks} /> </> : <LoginForm />}
        </div>
    );
}
