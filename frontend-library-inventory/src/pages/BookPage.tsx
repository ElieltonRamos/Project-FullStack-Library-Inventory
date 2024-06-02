import { useParams } from "react-router-dom";
import BookInfo from "../components/BookInfo"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react";
import Book from "../types/book";
import { requestBook } from "../services/requests";
import BookNotFound from "../components/BookNotFound";

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | { message: string }>({ message: '' });

  useEffect(() => {
    requestBook(id as string)
      .then((response) => setBook(response));
  }, [id]);

  return (
    <main className="w-screen h-screen bg-brown_100 flex flex-col items-center overflow-auto">
      <NavBar />
      <div className="w-sreen h-14 pt-14" />
      {'message' in book ? <BookNotFound message={book.message} /> : <BookInfo book={book} />}
    </main>
  )
}

export default BookPage;