import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Book from "../types/book";
import BookInfo from "../components/BookInfo";
import { requestBooks } from "../services/requests";

function Home() {
  const [books, setBooks] = useState<Book[] | { message: string }>({ message: '' });

  useEffect(() => {
    requestBooks().then((response) => setBooks(response));
  }, []);

  return (
    <main className="w-screen h-screen bg-brown_100 flex flex-col items-center overflow-auto">

      <NavBar />

      <section className="flex fle-col justify-center items-center bg-gray-100 rounded-lg shadow mt-10 w-3/4">
        { 'message' in books
          ? <p className="text-2xl text-gray-800 font-bold">No books available</p> 
          : books.map((book) => <BookInfo key={book.id} book={book} />
        )}
      </section>
    </main>
  )
}

export default Home;