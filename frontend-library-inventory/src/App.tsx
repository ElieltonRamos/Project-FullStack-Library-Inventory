import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Book from "./pages/Book"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<Home />} />
      <Route path="/books/:id" element={<Book />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
