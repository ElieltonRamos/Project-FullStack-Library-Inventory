import { useNavigate } from "react-router-dom";
import BookType from "../types/book";
import Book from "./Book";

type PropsBookInfo = {
  book: BookType;
};

function BookInfo({ book }: PropsBookInfo) {
  const navigate = useNavigate();
  const { description, CheckoutUser, status } = book;

  const deleteBook = (id: number) => {
    navigate('/book')
  };

  const borrowed = CheckoutUser?.userName === undefined ? null
    : <p className="text-sm text-white font-bold p-1 bg-gray-500 rounded-lg text-center">
      Borrowed by: {CheckoutUser?.userName}</p>;

  const borrow = () => {
    alert("Borrowed");
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

    </div>
  );
}

export default BookInfo;