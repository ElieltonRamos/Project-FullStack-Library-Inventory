import Book from "../types/book";

type PropsBookInfo = {
  book: Book;
};

function BookInfo({ book }: PropsBookInfo) {
  const { title, status, description, image, CheckoutUser } = book;

  const classStatusBook = status === "Available" ? "bg-green-500" : "bg-red-500";
  const borrowed = CheckoutUser?.userName === undefined ? null 
    : <p className="text-sm text-white font-bold p-1 bg-gray-500 rounded-lg text-center">Borrowed by: {CheckoutUser?.userName}</p>

  return (
    <article className="flex flex-col justify-center items-center p-5 bg-white w-3/4 shadow-sm rounded-md mb-5">

      <h1 className="text-xl text-gray-800 font-bold">{title}</h1>

      <p className="text-sm text-gray-800">{description}</p>

      <img src={image} alt="image-book" className="h-80 w-64" />

      <div className="flex justify-center gap-2 w-full mt-2">
        <p className={`text-sm text-white text-center font-bold p-1 bg-green-500 rounded-lg ${classStatusBook}`}>{status}</p>

        {borrowed}

        {status === "Available" ?
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-lg">
            Borrow
          </button>
          : null}

      </div>

    </article>
  );
}

export default BookInfo;