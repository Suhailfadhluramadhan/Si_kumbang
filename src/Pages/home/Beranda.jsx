import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Services/useAuth";
import {
  addChildForUser,
  getChildrenForUser,
  getName,
} from "../../Services/database";
import { FaBell } from "react-icons/fa";
import NotificationModal from "./Notifikasi";

const Beranda = () => {
  const { user, loading: authLoading } = useAuth();
  const [childrenData, setChildrenData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameUser, setUsername] = useState("user");
  const [showNotification, setShowNotification] = useState(false);

  const [newChild, setNewChild] = useState({
    gender: "Laki-laki",
    name: "",
    birthDate: "",
    weight: "",
    height: "",
  });

  const navigate = useNavigate();

  const calculateAgeInMonths = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    const months =
      (today.getFullYear() - birth.getFullYear()) * 12 +
      (today.getMonth() - birth.getMonth());
    return months;
  };

  const getDateLimits = () => {
    const today = new Date();

    const maxDate = new Date(today);
    maxDate.setMonth(today.getMonth() - 12);

    const minDate = new Date(today);
    minDate.setMonth(today.getMonth() - 36);

    return {
      min: minDate.toISOString().split("T")[0],
      max: maxDate.toISOString().split("T")[0],
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewChild((prev) => ({ ...prev, [name]: value }));
  };

  const fetchChildren = async () => {
    if (!user) return;
    const children = await getChildrenForUser(user.uid);
    setChildrenData(children);
  };

  useEffect(() => {
    if (!authLoading && user) {
      fetchChildren();
    }
  }, [user, authLoading]);

  const handleAddChild = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("User belum login");
      return;
    }

    if (
      !newChild.name ||
      !newChild.birthDate ||
      !newChild.weight ||
      !newChild.height
    ) {
      alert("Semua field harus diisi");
      return;
    }

    // Validasi umur anak (12-36 bulan)
    const ageInMonths = calculateAgeInMonths(newChild.birthDate);
    if (ageInMonths < 12 || ageInMonths > 36) {
      alert("Umur anak harus antara 12 hingga 36 bulan (1-3 tahun)");
      return;
    }

    try {
      await addChildForUser(user.uid, {
        name: newChild.name,
        gender: newChild.gender,
        birthDate: newChild.birthDate,
        weight: parseFloat(newChild.weight),
        height: parseFloat(newChild.height),
      });

      await fetchChildren();
      setIsModalOpen(false);
      setNewChild({
        gender: "Laki-laki",
        name: "",
        birthDate: "",
        weight: "",
        height: "",
      });
    } catch (err) {
      console.error("Error menambah anak:", err);
      alert("Gagal menambah data anak");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const name = await getName(user.uid);
      setUsername(name.name);
    };

    if (!authLoading && user?.uid) {
      fetchUser();
    }
  }, [authLoading, user]);

  if (authLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const dateLimits = getDateLimits();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-pink-100  font-sans pb-10">
      <div className="relative bg-[url('/ibu.jpg')] bg-cover bg-center text-white p-4 rounded-b-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#A0522D]/100  z-10" />

        <div className="relative z-20">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-3 "
              onClick={() => navigate("/profile")}
            >
              <div className="w-10 h-10 rounded-full bg-white border-2 border-white overflow-hidden">
                <img src="/img.png" alt="" className="object-cover" />
              </div>
              <span className="font-semibold text-lg">{nameUser}</span>
            </div>
            <div
              className="w-6 h-6 flex items-center justify-center"
              onClick={() => setShowNotification(true)}
            >
              <span>
                <FaBell className="text-white w-6 h-6" />
              </span>
            </div>
          </div>

          <h1 className="mt-3 font-bold text-xl leading-tight">
            Pantau Tumbuh Kembang Anak dengan Si-Kumbang
          </h1>
          <p className="text-sm mt-1 text-orange-100">
            Website Kesehatan Anak untuk Memastikan Si Kecil Berkembang Optimal
            Sesuai dengan Usianya!
          </p>
          <p className="mt-2 text-xs text-orange-200">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Data Anak */}
      <div className="px-4 mt-2 ">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Data Anak</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm text-blue-600 hover:underline"
          >
            + Tambah data anak
          </button>
        </div>

        {childrenData.length === 0 ? (
          <p className="text-gray-500">Belum ada data anak</p>
        ) : (
          <div className="flex space-x-10 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-5 px-4">
            {childrenData.map((child) => (
              <div
                onClick={() => navigate(`/anak/${child.id}`)}
                key={child.id}
                className={`min-w-[190px] ${
                  child.gender === "Laki-laki"
                    ? "shadow-[10px_10px_0px_rgba(59,130,246,1)]"
                    : "shadow-[10px_10px_0px_rgba(128,90,213,1)]"
                } rounded-lg p-4 bg-white`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={
                      child.gender === "Laki-laki" ? "male.png" : "female.png"
                    }
                    alt={child.gender}
                    className="w-10 h-10 rounded-full  p-1"
                  />
                  <div className="text-black">
                    <div className="flex flex-row justify-center items-center  gap-2">
                      <p className="font-semibold text-xl">{child.name}</p>
                      <IoIosArrowForward className="text-xl" />
                    </div>

                    <p className="text-sm opacity-90">
                      {(() => {
                        const birth = new Date(child.birthDate);
                        const today = new Date();
                        const diffYears =
                          today.getFullYear() - birth.getFullYear();
                        let diffMonths = today.getMonth() - birth.getMonth();
                        if (diffMonths < 0) {
                          diffMonths += 12;
                        }
                        return `${diffYears} tahun ${diffMonths} bulan`;
                      })()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="px-4">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Rekomendasi video</h1>
          <button
            onClick={() => navigate("/VideoList")}
            className="text-sm text-blue-600 hover:underline text-end"
          >
            lihat video lainnya
          </button>
        </div>

        <div>
          <div className="w-full max-w-xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wybpCVQg9E0"
              title="YouTube video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal Tambah Anak */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50">
          <div className="bg-white rounded-lg w-[90%] max-w-md p-6">
            <h2 className="text-lg font-semibold mb-4">Tambah Data Anak</h2>
            <p className="text-sm text-gray-600 mb-4">
              * Hanya untuk anak usia 12-36 bulan (1-3 tahun)
            </p>
            <form onSubmit={handleAddChild} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Jenis Kelamin</label>
                <select
                  name="gender"
                  value={newChild.gender}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Nama Anak</label>
                <input
                  type="text"
                  name="name"
                  value={newChild.name}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Tanggal Lahir{" "}
                  <span className="text-xs text-gray-500">
                    (1-3 tahun yang lalu)
                  </span>
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={newChild.birthDate}
                  onChange={handleInputChange}
                  min={dateLimits.min}
                  max={dateLimits.max}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Berat Badan (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  name="weight"
                  value={newChild.weight}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Tinggi Badan (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  name="height"
                  value={newChild.height}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-[#cc5f29] text-white rounded hover:bg-[#b84e20]"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showNotification && (
        <NotificationModal onClose={() => setShowNotification(false)} />
      )}
    </div>
  );
};

export default Beranda;
