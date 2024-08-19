'use client';
import RegisterBookForm from "./components/Form";
import BookCards from "./components/BookCard";
import Hero from "./components/Hero";

export default function Home() {
  return ( 
    <>
    <Hero />
    <RegisterBookForm />
    <BookCards/>

    </>
  );
}
