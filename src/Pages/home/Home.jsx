// // src/pages/Home.jsx
// import { signOut } from "firebase/auth";
// // import { auth } from "../config/firebase";
// import { auth } from "../../config/firebase"
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/login");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-[#D91656]">Welcome Home 🎉</h1>
//       <button
//         onClick={handleLogout}
//         className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Home;


import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] p-4 font-sans">
      {/* Header */}
      <div className="bg-white rounded-xl shadow p-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-300" />
          <div>
            <h2 className="text-lg font-bold">Siska</h2>
            <p className="text-sm text-gray-600">Jl. Pamulang Permai 1 Blok B 17 No.16A</p>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-xl font-bold text-orange-700">
            Pantau Tumbuh Kembang Anak dengan Si-Kumbang
          </h1>
          <p className="text-sm text-gray-700">
            Website Kesehatan Anak untuk Memastikan Si Kecil Berkembang Optimal Sesuai dengan Usianya!
          </p>
          <p className="mt-2 text-sm text-gray-500">Kamis, 11 September 2025</p>
        </div>
      </div>

      {/* Dashboard Info Anak */}
      <div className="bg-white rounded-xl shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
        <div className="bg-blue-100 rounded-xl p-4 flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">♂</div>
          <div>
            <p className="font-semibold">Anak 1</p>
            <p className="text-sm text-gray-600">2 tahun 5 bulan</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-purple-200 rounded-xl p-3 font-medium">Berat</div>
          <div className="bg-yellow-200 rounded-xl p-3 font-medium">Tinggi</div>
          <div className="bg-pink-200 rounded-xl p-3 font-medium">Status Gizi</div>
        </div>
      </div>

      {/* Fitur Langkah Maju */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Fitur Langkah Maju</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Placeholder cards with gray background for images */}
          {[
            "Pemantauan Perkembangan",
            "Imunisasi",
            "Stimulasi",
            "Catatan Perkembangan",
          ].map((title, index) => (
            <div key={index} className="bg-orange-200 rounded-xl p-4 flex flex-col items-center text-center shadow">
              <div className="w-20 h-20 bg-gray-300 rounded-lg mb-2" />
              <p className="text-sm font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

