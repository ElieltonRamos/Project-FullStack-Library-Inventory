import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import BookPage from "./pages/BookPage"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/books" element={<Home />} />
      <Route path="/books/:id" element={<BookPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
