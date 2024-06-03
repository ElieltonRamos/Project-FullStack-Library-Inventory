import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import BookPage from "./pages/BookPage"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import { useEffect } from "react"

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/')
  }, [navigate])

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book" element={<Home />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
