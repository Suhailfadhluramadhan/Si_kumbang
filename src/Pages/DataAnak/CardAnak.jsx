import React, { useEffect, useState } from "react";
import { useParams, useNavigate, data } from "react-router-dom";
import { useAuth } from "../../Services/useAuth";
import {
  getChildById,
  getName,
  deleteChild,
  updateChildData,
} from "../../Services/database";
import { FaBell, FaTrash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { GiWeightScale } from "react-icons/gi";
import { CiRuler } from "react-icons/ci";
import { toast } from "react-toastify";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  calculateNutritionStatus,
  calculateAgeInMonths,
} from "../../utils/nutritionCalculator";
import { Childd } from "./AnakConteks";
import { EditChildModal } from "./EditChildModal";

const CardAnak = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const [child, setChild] = useState(null);
  const [loadingg, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [nameUser, setUsername] = useState("user");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [data, setData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleSaveEdit = async (formData) => {
    if (!user || !child) return;

    try {
      await updateChildData(user.uid, child.id, formData);

      // Update state child dengan data baru
      const updatedChild = {
        ...child,
        ...formData,
      };
      setChild(updatedChild);

      // Tutup modal
      setShowEditModal(false);

      // Toast sukses
      toast.success("✅ Data anak berhasil diperbarui!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
      });

      // Reload setelah 2 detik (beri waktu toast muncul)
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error updating child:", error);
      toast.error("❌ Gagal memperbarui data anak", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  };

  useEffect(() => {
    const fetchName = async () => {
      const name = await getName(user.uid);
      setUsername(name.name);
    };

    if (user?.uid && !loading) {
      fetchName();
    }
  }, [user, loading]);

  useEffect(() => {
    const fetchChild = async () => {
      try {
        if (!user) return;
        const data = await getChildById(user.uid, id);
        // console.log(data);
        setChild(data);
        localStorage.setItem("childId", data.id);
      } catch (error) {
        setErrorMsg("Data anak tidak ditemukan.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.uid && !loading) {
      fetchChild();
    }
  }, [user, id]);

  const result = child ? calculateAgeInMonths(child.birthDate) : null;
  // console.log(result - 1);

  const resultt = child ? calculateNutritionStatus(child.weight, result) : null;

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!user || !child) return;

    setIsDeleting(true);

    try {
      await deleteChild(user.uid, child.id);

      // Hapus dari localStorage
      localStorage.removeItem("childId");

      // Toast sukses
      toast.success("Data anak berhasil dihapus", {
        position: "top-center",
        autoClose: 3000,
      });

      // Redirect ke beranda setelah 1 detik
      setTimeout(() => {
        navigate("/beranda");
      }, 1000);
    } catch (error) {
      console.error("Error deleting child:", error);
      toast.error("Gagal menghapus data anak", {
        position: "top-center",
        autoClose: 3000,
      });
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  if (loadingg) return <p className="text-center mt-10">Loading...</p>;
  if (errorMsg)
    return <p className="text-center mt-10 text-red-500">{errorMsg}</p>;

  return (
    <div className="bg-gradient-to-br from-amber-100 to-pink-100 min-h-screen">
      <div className="relative bg-[url('/ibu.jpg')] bg-cover bg-center text-white p-4 rounded-b-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#A0522D]/100 z-10" />

        <div className="relative z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-white overflow-hidden">
                <img src="/img.png" alt="" className="object-cover" />
              </div>
              <span className="font-semibold text-lg">{nameUser}</span>
            </div>
            <div className="w-20 h-20 gap-3.5 flex items-center justify-center">
              <BsThreeDotsVertical
                className=" text-white w-10 h-10"
                onClick={() => navigate("/beranda")}
              />
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

      <div className="flex-coll px-4 mt-2 gap-2">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <button
            onClick={handleDeleteClick}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <FaTrash className="text-sm" />
            <span className="text-sm font-semibold">Hapus Data</span>
          </button>
        </div>

        <div className="flex space-x-10 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-5 px-4">
          <div
            key={child.id}
            className={`min-w-[190px] ${
              child.gender === "Laki-laki"
                ? "shadow-[10px_10px_0px_rgba(59,130,246,1)]"
                : "shadow-[10px_10px_0px_rgba(128,90,213,1)]"
            } rounded-lg p-4 bg-white`}
            onClick={() => setShowEditModal(true)}
          >
            <div className="flex items-center gap-3">
              <img
                src={child.gender === "Laki-laki" ? "/male.png" : "/female.png"}
                alt={child.gender}
                className="w-10 h-10 rounded-full p-1"
              />
              <div className="text-black">
                <div className="flex flex-row justify-center items-center gap-2">
                  <p className="font-semibold text-xl">{child.name}</p>
                  <IoIosArrowForward className="text-xl" />
                </div>

                <p className="text-sm opacity-90">
                  {(() => {
                    const birth = new Date(child.birthDate);
                    const today = new Date();
                    const diffYears = today.getFullYear() - birth.getFullYear();
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
        </div>

        <div className="flex justify-around mt-4 px-4">
          <div className="flex flex-col items-center bg-yellow-400 text-yellow-800 rounded-lg p-4 w-24 shadow">
            <CiRuler size={28} />
            <p className="mt-2 font-semibold text-sm">Tinggi</p>
            <h1>{child.height}</h1>
          </div>

          <div className="flex flex-col items-center bg-purple-400 text-purple-800 rounded-lg p-4 w-24 shadow">
            <GiWeightScale size={28} />
            <p className="mt-2 font-semibold text-sm">Berat</p>
            <h1>{child.weight}</h1>
          </div>

          <div
            className={`flex flex-col items-center rounded-lg p-4 w-24 shadow
    ${
      resultt.status === "Gizi Kurang"
        ? "bg-red-500"
        : "bg-pink-400 text-pink-800"
    }`}
            onClick={() => navigate("./gizi")}
          >
            <LiaNotesMedicalSolid size={28} />
            <p className="mt-2 font-semibold text-sm">Gizi</p>
            <h1>{resultt.status}</h1>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <h1 className="font-bold text-2xl mb-4">Fitur Langkah Maju</h1>

        <div className="grid grid-cols-2 gap-4">
          <div
            className="bg-[#C25E2E] rounded-lg p-4 flex flex-col items-center justify-center text-white cursor-pointer"
            onClick={() => navigate("/Perkembangan")}
          >
            <img src="/perkembangan.png" alt="Pemantauan" className="mb-2" />
            <p className="text-center text-sm font-semibold">
              Pemantauan Perkembangan
            </p>
          </div>

          <div
            className="bg-[#C25E2E] rounded-lg p-4 flex flex-col items-center justify-center text-white cursor-pointer"
            onClick={() => navigate("/vaksin")}
          >
            <img src="/Injection.png" alt="Imunisasi" className="mb-2" />
            <p className="text-center text-sm font-semibold">Imunisasi</p>
          </div>

          <div
            className="bg-[#C25E2E] rounded-lg p-4 flex flex-col items-center justify-center text-white cursor-pointer"
            onClick={() => navigate("/Stimulasi")}
          >
            <img src="/Stimulasi.png" alt="Stimulasi" className="mb-2" />
            <p className="text-center text-sm font-semibold">Stimulasi</p>
          </div>

          <div
            className="bg-[#C25E2E] rounded-lg p-4 flex flex-col items-center justify-center text-white cursor-pointer"
            onClick={() => navigate("/catatan")}
          >
            <img src="/Note.jpg" alt="Catatan" className="mb-2" />
            <p className="text-center text-sm font-semibold">
              Catatan Perkembangan
            </p>
          </div>
        </div>
      </div>

      {/* Modal Konfirmasi Delete */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrash className="text-red-500 text-2xl" />
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Hapus Data Anak?
              </h2>

              <p className="text-gray-600 mb-6">
                Jika Anda menghapus data ini, Anda akan kehilangan semua progres
                perkembangan, imunisasi, dan catatan terkait{" "}
                <span className="font-semibold">{child?.name}</span>. Tindakan
                ini tidak dapat dibatalkan.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  disabled={isDeleting}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirmDelete}
                  disabled={isDeleting}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isDeleting ? "Menghapus..." : "Ya, Hapus"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <EditChildModal
          child={child}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default CardAnak;
export function ChildProvider({ children }) {
  const { user, loading } = useAuth();
  const [child, setChild] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const childId = localStorage.getItem("childId");
        if (!childId) {
          console.warn("childId tidak ditemukan di localStorage.");
          return;
        }

        const fetchedChild = await getChildById(user.uid, childId);
        setChild(fetchedChild);
      } catch (error) {
        console.error("Gagal mengambil data anak:", error);
      }
    };

    if (user?.uid && !loading) {
      fetchData();
    }
  }, [user, loading]);

  return <Childd.Provider value={child}>{children}</Childd.Provider>;
}
