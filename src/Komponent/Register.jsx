import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Services/auth";
import { saveUserToFirestore } from "../Services/database";

function Register() {
  const [user, setUser] = useState({
    Name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const newUser = await registerUser(user.email, user.password);

      await saveUserToFirestore(newUser.user.uid, user.Name, user.email);
      alert("Register berhasil! Silakan login.");
      navigate("/login");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert(
          "Email sudah terdaftar, silakan login atau gunakan Google Sign-In"
        );
        navigate("/login");
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-end justify-center bg-white flex-col">
      <div className="w-full flex flex-col items-center justify-center">
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

      <div className="w-full bg-[#cc5f29] border border-white rounded-t-2xl shadow-lg p-5 ">
        <header className="mb-6">
          <h1 className="text-4xl font-bold kodemono text-center text-white">
            Daftar
          </h1>
        </header>
        <form onSubmit={handleRegister}>
          <div>
            <label className="block mb-2 text-white">Nama</label>
            <input
              className="w-full p-2 mb-6 text-black border-b-2 border-white bg-white rounded-2xl outline-none focus:bg-amber-100"
              type="text"
              name="Name"
              value={user.Name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-white">Email</label>
            <input
              className="w-full p-2 mb-6 text-black border-b-2 border-white bg-white rounded-2xl outline-none focus:bg-amber-100"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-white">Sandi</label>
            <input
              className="w-full p-2 mb-6 text-black border-b-2 border-white bg-white rounded-2xl outline-none focus:bg-amber-100"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              className="w-full bg-[#ef915b] hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-2 rounded cursor-pointer transition duration-300"
              type="submit"
              value="Daftar"
            />
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default Register;
