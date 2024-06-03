import { useNavigate } from "react-router-dom";
import BookType from "../types/book";

type PropsBook = {
  book: BookType;
  detailsView: boolean;
};

function Book({ book, detailsView }: PropsBook) {
  const navigate = useNavigate();
  const { title, status, image } = book;

  const classStatusBook = status === "available" ? "bg-green-500" : "bg-red-500";

  return (
    <article className="min-w-64 flex flex-col justify-center items-center p-5 bg-white shadow-lg rounded-md">

      <h1 className="text-xl text-gray-800 font-bold">{title}</h1>

      <img src={image} alt="image-book" className="h-80 w-64" />

      <div className="mt-3 flex gap-2">

        <span
          className={`text-lg text-white text-center font-bold p-1 bg-green-500 rounded-lg mt-2 ${classStatusBook}`}>
          {status}
        </span>

        {detailsView
          ? <button
            onClick={() => navigate(`${book.id}`)}
            className="button bg-blue-400 text-sm text-white">
            View Details
          </button>
          : null
        }

      </div>

    </article>
  );
}

export default Book;