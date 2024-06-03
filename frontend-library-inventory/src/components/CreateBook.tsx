import { useState } from "react";
import { CreateBook as CreateBookType } from "../types/book";
import LoadingSmall from "./LoadingSmall";
import { requestCreateBook } from "../services/requests";

function CreateBook() {
  const initialBook = { title: '', description: '', image: '' };
  const [newBook, setNewBook] = useState<CreateBookType>(initialBook);
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  }

  const createBook = async () => {
    setLoading(true);
    const responseCreateBook = await requestCreateBook(newBook);
    setLoading(false);

    if ('message' in responseCreateBook) return setMsgError(responseCreateBook.message);
    setNewBook(initialBook);
    window.location.reload();
  };

  return (
    <section className="min-w-64 shadow-xl bg-white border mb-2 border-slate-200 flex flex-col gap-2 rounded-xl p-2 text-sm">
      <h1 className="text-center text-slate-500 text-sm font-bold">Register a new book</h1>

      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300
   focus:border-slate-600"
        type="text"
        name="title"
        value={newBook.title}
        onChange={handleChange}
        placeholder="what title of the book?"
      />

      <textarea
        itemType="text"
        name="content"
        value={newBook.description}
        onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
        placeholder="what description of the book?"
        className="bg-slate-100 h-10 text-slate-600 placeholder:text-slate-600 placeholder:opacity-50 border
        border-slate-200
          resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
      />

      <span className="text-slate-500 text-[10px] mb-1 font-semibold text-center">Add image to the book</span>
      
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1
          duration-300 focus:border-slate-600"
        type="text"
        name="image"
        value={newBook.image}
        onChange={handleChange}
        placeholder="add url image"
      />

      <span className="text-red text-[10px] mb-[-10px] font-semibold text-center">{msgError}</span>

      <button
        onClick={createBook}
        className="transition-all duration-300 active:scale-95 w-full bg-blue-400 stroke-slate-600 border 
    border-slate-200 col-span-2 flex justify-center rounded-lg p-2 hover:border-slate-800 hover:text-white"
      >
        {loading ? <LoadingSmall /> :
          <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" />
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10.11 13.6501L13.69 10.0601" />
          </svg>
        }
      </button>
    </section>
  )
}

export default CreateBook;