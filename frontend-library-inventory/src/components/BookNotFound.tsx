function BookNotFound({ message }: { message: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 flex flex-col items-center">
      <h1 className="text-2xl text-red-600 font-bold">{message}</h1>
      <p className="text-lg text-red-600">Oops... It seems that this book is not registered on our website.</p>
    </div>
  )
}

export default BookNotFound;