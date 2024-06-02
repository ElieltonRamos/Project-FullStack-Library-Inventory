import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <main className="w-screen h-screen bg-brown_100 flex flex-col">

      <nav className="h-14 w-full bg-white shadow-md flex justify-around">
        <img src="https://cdn-icons-png.flaticon.com/512/2097/2097068.png" alt="logo" className="h-14 w-14" />
        <h1 className="text-brown_300 font-bold text-md mt-3 ml-3">Library Inventory</h1>
        <button
          onClick={logout}
          className="button bg-blue-600 text-white h-8 w-20 mt-3">
          Logout
        </button>
      </nav>

      <section className="flex justify-center items-center bg-gray-200 h-1 mt-10 w-3/4">
        
      </section>
    </main>
  )
}

export default Home;