function BookNotFound({ message }: { message: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 flex flex-col items-center">
      <h1 className="text-2xl text-red-600 font-bold">{message}</h1>
      <p className="text-lg text-red-600">Oops... It seems that this book is not registered on our website.</p>
      <button className="button p-1 rounded-lg bg-gray-800 text-white font-semibold">
        Return
      </button>
    </div>
  )
}

export default BookNotFound;