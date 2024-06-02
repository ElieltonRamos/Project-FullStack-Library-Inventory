import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }
  
  return (
    <nav className="h-14 w-full bg-white shadow-md flex justify-around">
      <img src="https://cdn-icons-png.flaticon.com/512/2097/2097068.png" alt="logo" className="h-14 w-14" />
      <h1 className="text-brown_300 font-bold text-md mt-3 ml-3">Library Inventory</h1>
      <button
        onClick={logout}
        className="button bg-gray-600 text-white h-8 w-20 mt-3 hover:bg-gray-700">
        Logout
      </button>
    </nav>
  )
}
export default NavBar;