import { useNavigate, useParams } from "react-router-dom";
import BookInfo from "../components/BookInfo"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react";
import Book from "../types/book";
import { MsgBackend, requestBook } from "../services/requests";
import BookNotFound from "../components/BookNotFound";

function BookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | MsgBackend>({ message: '' });

  useEffect(() => {
    requestBook(id as string)
      .then((response) => setBook(response));
  }, [id]);

  return (
    <main className="w-screen h-screen bg-brown_100 flex flex-col items-center overflow-auto">
      <NavBar />
      <div className="w-sreen h-14 pt-14" />
      {'message' in book ? <BookNotFound message={book.message} /> : <BookInfo book={book} />}
      <button
        onClick={() => navigate('/book')}
        className="button p-1 rounded-lg bg-gray-800 text-white font-semibold">
        Return
      </button>
    </main>
  )
}

export default BookPage;