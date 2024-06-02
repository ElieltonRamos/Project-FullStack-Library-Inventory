import BookInfo from "../components/BookInfo"
import NavBar from "../components/NavBar"

const bookMock = {
  id: 1,
  title: "The Hobbit",
  description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
  status: "Checkout",
  image: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
  CheckoutUser: {
    id: 1,
    userName: "John Doe",
  }
}

function BookPage() {

return (
  <main className="w-screen h-screen bg-brown_100 flex flex-col items-center">
    <NavBar />
    <div className="w-sreen h-14 pt-14" />
    <BookInfo book={bookMock} />
  </main>
)
}

export default BookPage;