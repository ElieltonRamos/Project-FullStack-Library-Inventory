import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import BookType from "../types/book";
import Book from "../components/Book";
import { MsgBackend, requestBooks } from "../services/requests";

function Home() {
  const [books, setBooks] = useState<BookType[] | MsgBackend>({ message: '' });

  useEffect(() => {
    requestBooks().then((response) => setBooks(response));
  }, []);

  const noBooks = <p className="text-2xl text-gray-800 font-bold">No registered books</p>

  return (
    <main className="w-screen h-screen bg-brown_100 flex flex-col items-center overflow-auto">

      <NavBar />

      <section className="justify-center items-center bg-gray-100 rounded-lg shadow mt-10 w-3/4">
        {'message' in books
          ? noBooks
          : books.map((book) => <Book key={book.id} book={book} detailsView={true} />
          )}
      </section>
    </main>
  );
}

export default Home;