import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSmall from "../components/LoadingSmall";
import { handleChange } from "../services/eventsHandles";
import { requestLogin } from "../services/requests";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ userName: '', password: ''});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await requestLogin(form);
    setLoading(false);
    if ('message' in response) return setErrorMsg(response.message);
    localStorage.setItem('token', response.token);
    setErrorMsg('');
    navigate('/book');
  }

  return (
    <main className="w-screen h-screen bg-brown_100 flex items-center justify-center flex-col md:flex-row">

      <section className="w-580 pr-8 text-center md:text-left">
        <h1 className="text-brown_300 font-bold text-5xl">Library Inventory</h1>
        <h2 className="text-3xl text-brown_500">Easily manage books. Find, borrow and organize with Book Master.</h2>
      </section>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 w-380 rounded-md flex justify-center items-center flex-col shadow-lg mt-4"
      >

        <input
          onChange={(e) => handleChange(e, setForm, form)}
          value={form.userName}
          className="input-login"
          name="userName"
          placeholder="Username"
        />
        <input
          onChange={(e) => handleChange(e, setForm, form)}
          value={form.password}
          className="input-login"
          type="password"
          name="password"
          placeholder="Password"
        />

        <button
          className="button h-12 w-full bg-blue-600 text-white"
          type="submit"
          disabled={loading}
        >
          {loading ? <LoadingSmall /> : 'Login'}
        </button>
        <p className="text-red-600 font-light text-sm mt-2">{errorMsg}</p>

        <hr className="w-full my-4 border-5" />

        <button
          onClick={() => navigate('/register')}
          className="button bg-green-600 text-white px-5 h-12"
          type="button"
        >
          Create New Account
        </button>

      </form>

    </main>
  )
}

export default Login;