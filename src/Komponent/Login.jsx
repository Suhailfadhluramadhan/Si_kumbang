import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUser(email, password);
      alert("Login berhasil!");
      navigate("/beranda");
    } catch (err) {
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/invalid-credential"
      ) {
        alert("Email atau password salah, atau akun belum terdaftar.");
      } else {
        alert("Terjadi kesalahan saat login.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-end h-screen bg-white">
      <div className="flex items-center flex-col">
        <h1 className="text-center kodemono text-2xl">Selamat datang di</h1>
        <img
          src="tulisanLogo.jpg"
          alt=""
          className="w-60 h-auto object-contain"
        />
        <img
          src="Logo.png"
          alt="gambar lebah"
          className="w-50  md:w-48 lg:w-60 xl:w-72 2xl:w-80 h-auto object-contain"
        />
      </div>
      <div className="w-full bg-[#cc5f29] rounded-t-4xl p-5 pb-10">
        <form onSubmit={handleLogin}>
          <h1 className="text-2xl mb-5 font-bold kodemono text-white">Masuk</h1>
          <div>
            <label className="block mb-2 text-white" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-black border-b-2 border-white outline-none focus:bg-white rounded-2xl bg-amber-50"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-white" htmlFor="password">
              Sandi
            </label>
            <input
              className="w-full p-2 mb-6 text-black border-b-2 border-white outline-none focus:bg-white rounded-2xl bg-amber-50"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex  justify-center gap-2 bg-[#ef915b] hover:bg-indigo-700 text-white font-bold py-2 px-2 my-3 rounded text-xl cursor-pointer  transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Loading...
                </>
              ) : (
                "Masuk"
              )}
            </button>
          </div>
        </form>
        <footer className="flex justify-center text-sm">
          <Link to="/register" className="text-white hover:text-indigo-700">
            Belum punya akun?{" "}
            <span className="font-bold text-white">Daftar</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Login;
