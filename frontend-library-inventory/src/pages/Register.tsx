import { useNavigate } from "react-router-dom";
import { handleChange } from "../services/eventsHandles";
import { useState } from "react";
import LoadingSmall from "../components/LoadingSmall";
import { requestRegisterUser } from "../services/requests";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ userName: '', password: ''});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await requestRegisterUser(form);
    setLoading(false);
    if ('message' in response) return setErrorMsg(response.message);
    localStorage.setItem('token', response.token);
    setErrorMsg('');
    navigate('/book');
  }
  
  return (
    <main className="w-screen h-screen bg-brown_100 flex items-center justify-center flex-col">

      <h1 className="text-brown_300 font-bold text-5xl">Library Inventory</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 w-380 rounded-md flex justify-center items-center flex-col shadow-lg mt-4">
        <h2 className="text-black font-bold text-4xl">Sign up</h2>
        <hr className="w-full my-4 border-8" />

        <input
          className="input-login"
          onChange={(e) => handleChange(e, setForm, form)}
          name="userName" type="text" placeholder="Username"
        />

        <input 
          className="input-login" 
          onChange={(e) => handleChange(e, setForm, form)} 
          name="password" 
          type="password" 
          placeholder="Password"
        />

        <p className="text-red text-sm">{errorMsg}</p>

        <button
          className="button h-12 w-full bg-blue-600 text-white dark:hover:bg-blue-700"
          type="submit"
          disabled={loading}>
          {loading ? <LoadingSmall /> : 'Sign up'}
        </button>

      </form>

      <button
        className="button text-gray-900 bg-gray-500 dark:hover:bg-gray-600"
        onClick={() => navigate('/')}
        >
        Return
      </button>

    </main>
  );
}

export default Register;