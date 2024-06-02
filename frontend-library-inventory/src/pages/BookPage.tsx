import BookInfo from "../components/BookInfo"
import NavBar from "../components/NavBar"

function BookPage() {

  return (
    <main className="w-screen h-screen bg-brown_100 flex flex-col items-center overflow-auto">
      <NavBar />
      <div className="w-sreen h-14 pt-14" />
      <BookInfo book={} />
    </main>
  )
}

export default BookPage;