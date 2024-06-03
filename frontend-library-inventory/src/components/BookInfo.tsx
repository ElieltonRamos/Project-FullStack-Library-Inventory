import { useNavigate } from "react-router-dom";
import BookType from "../types/book";
import Book from "./Book";
import { requestBorrowBook, requestDeleteBook } from "../services/requests";
import { useState } from "react";

type PropsBookInfo = {
  book: BookType;
};

function BookInfo({ book }: PropsBookInfo) {
  const navigate = useNavigate();
  const [msg, setMsg] = useState<string | null>(null);
  const { description, bookBorrowedUser, status } = book;

  const deleteBook = async (id: number) => {
    await requestDeleteBook(id);
    navigate('/book')
  };

  const borrowed = bookBorrowedUser?.userName === undefined ? null
    : <p className="text-sm text-white font-bold p-1 bg-gray-500 rounded-lg text-center">
      Borrowed by: {bookBorrowedUser?.userName}</p>;

  const borrow = async () => {
    const requestBorrow = await requestBorrowBook(book.id);
    if (requestBorrow.message !== 'Book borrowed') return setMsg(requestBorrow.message);
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 bg-white w-3/4 shadow-lg rounded-md mb-5">

      <Book book={book} detailsView={false} />

      <p className="text-sm text-gray-800 mt-5">{description}</p>

      <div className="flex justify-center gap-2 w-full mt-2">

        {borrowed}

        {status === "available" ?
          <button
            onClick={borrow}
            className="bg-blue-500 h-full hover:bg-blue-700 text-white font-bold p-1 rounded-lg">
            Borrow
          </button>
          : null
        }

        <button
          onClick={() => deleteBook(book.id)}
          className="button bg-red-700 text-white h-full hover:bg-red-800 mt-[-1px]">
          Delete book
        </button>

      </div>

      <span className="text-red-600 text-sm mt-2">{msg}</span>

    </div>
  );
}

export default BookInfo;