import Book from "../types/book";

type PropsBookInfo = {
  book: Book;
};

function BookInfo({ book }: PropsBookInfo) {
  const { title, status, description, image } = book;

  const classStatusBook = status === "Available" ? "bg-green-500" : "bg-red-500";

  return (
    <article className="flex flex-col justify-center items-center p-5 bg-white w-3/4 shadow-sm rounded-md">

      <h1 className="text-xl text-gray-800 font-bold">{title}</h1>
      <p className="text-sm text-gray-800">Description: {description}</p>
      <img src={image} alt="image-book" className="h-80 w-64"/>

      <div className="flex justify-around w-full mt-2">
        <p className={`text-sm text-gray-800 font-bold p-1 bg-green-500 rounded-lg ${classStatusBook}`}>{status}</p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-lg">
            Borrow
        </button>

      </div>

    </article>
  );
}

export default BookInfo;