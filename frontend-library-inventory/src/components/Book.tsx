import BookType from "../types/book";

type PropsBook = {
  book: BookType;
};

function Book({ book }: PropsBook) {
  const { title, status, image } = book;

  const classStatusBook = status === "available" ? "bg-green-500" : "bg-red-500";

  return (
    <article className="flex flex-col justify-center items-center p-5 bg-white shadow-sm rounded-md">

      <h1 className="text-xl text-gray-800 font-bold">{title}</h1>

      <img src={image} alt="image-book" className="h-80 w-64" />

      <p
        className={`text-sm text-white text-center font-bold p-1 bg-green-500 rounded-lg mt-2 ${classStatusBook}`}>
        {status}
      </p>

    </article>
  );
}

export default Book;