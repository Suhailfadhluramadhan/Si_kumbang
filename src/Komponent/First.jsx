import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

import animationData1 from "../assets/Doctor.json";
import animationData2 from "../assets/Asuh.json"; // Ganti sesuai file kamu

function First() {
  const navigate = useNavigate();

  const cardData = [
    {
      id: 1,
      anima: animationData1,
      head: "Optimalkan Tumbuh Kembang",
      paragraf:
        "Cek pertumbuhan, perkembangan dan vaksin si Kecil secara akurat dengan standar WHO dan KIA",
    },
    {
      id: 2,
      anima: animationData2,
      head: "Pendampingan Stimulasi",
      paragraf:
        "Dampingi tumbuh kembang balita dengan panduan stimulasi sesuai usia, berbasis standar WHO dan KIA",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cardData.length);
    }, 5000);

    return () => clearInterval(interval);

  }, [cardData.length]);

  const currentCard = cardData[index];

  return (
    <div className="flex flex-col items-center justify-end h-screen bg-gradient-to-br from-amber-100 to-pink-100 overflow-hidden">
      <div className="flex justify-center items-center flex-col mb-10">
        <Lottie
          animationData={currentCard.anima}
          loop
          style={{ width: 300, height: 300 }}
        />
        <div className="flex flex-col items-center px-5 gap-2">
          <h1 className="font-bold font-serif text-xl text-center">
            {currentCard.head}
          </h1>
          <p className="text-center text-sm">{currentCard.paragraf}</p>
        </div>

        {/* DOTS */}
        <div className="flex space-x-2 mt-4">
          {cardData.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === i ? "bg-[#cc5f29]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="konten-utama w-full bg-white rounded-t-3xl border-2 border-black p-5 pb-20 flex flex-col items-center justify-end">
        <div className="w-full flex items-center">
          <img
            src="Logo.png"
            alt="Logo"
            className="w-30 h-auto object-contain"
          />
          <img src="tulisanLogo.jpg" alt=""  className="w-40 h-auto object-contain"/>
        </div>
        <h1 className="w-full text-left text-black font-bold text-lg mb-6">
          Yuk, masuk atau daftar akun baru!
        </h1>

        {/* Tombol Masuk */}
        <button
          onClick={() => navigate("/login")}
          className="w-3/4 bg-[#cc5f29] text-white font-bold py-3 px-6 rounded-full border-2 border-white transition duration-300 mb-4"
        >
          Masuk
        </button>

        {/* Tombol Daftar */}
        <button
          onClick={() => navigate("/register")}
          className="w-3/4 text-black font-bold py-3 px-6 rounded-full border-2 border-[#cc5f29] hover:bg-amber-100 transition duration-300"
        >
          Daftar
        </button>
      </div>
    </div>
  );
}

export default First;
