import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Services/useAuth";
import { useEffect, useState } from "react";
import { getName } from "../../Services/database";
import Card from "./Card";
import { CiLogout } from "react-icons/ci";
import { IoShieldCheckmark, IoDocumentText } from "react-icons/io5";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const name = await getName(user.uid);
      if (name != null) {
        setData(name);
      }
    };

    if (!authLoading && user?.uid) {
      fetchUser();
    }
  }, [user, authLoading]);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      toast.success("Berhasil keluar.");
      navigate("/login");
    } catch (error) {
      console.error("Logout gagal:", error);
      toast.error("Gagal keluar. Coba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-orange-600 text-white p-4 relative flex items-center justify-start">
        <IoIosArrowBack
          className="text-2xl"
          onClick={() => navigate("/beranda")}
        />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold">
          Profile
        </h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center bg-white mt-4">
        <div className="relative w-20 rounded-full bg-white border-2 border-white">
          <img src="img.png" alt="Profile" className="w-20 object-cover" />
          <button
            className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full text-white text-xs"
            onClick={() => setOpen(true)}
          >
            ✏️
          </button>
        </div>

        {data ? (
          <>
            <h2 className="font-semibold text-lg mt-2">{data.name}</h2>
            <p className="text-black text-sm">{data.email}</p>
          </>
        ) : (
          <p className="text-sm text-gray-500 mt-2">Loading data...</p>
        )}
      </div>

      {/* Informasi Section */}
      <div className="mt-6 mb-10">
        <h3 className="text-sm text-black p-2 bg-gray-300 font-semibold mb-2">
          Informasi
        </h3>
        <div className="rounded-lg">
          {/* Bantuan */}
          <div className="flex items-center justify-between p-3 border-b cursor-pointer">
            <a
              href="https://wa.me/6285890304662"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <div className="flex items-center justify-between hover:bg-gray-50 transition px-1">
                <div className="flex items-center gap-2">
                  <IoDocumentText className="font-bold" />
                  <p className="text-xl font-semibold">
                    Bantuan, Kritik & Masukan
                  </p>
                </div>
                <span className="text-xl">›</span>
              </div>
            </a>
          </div>

          {/* Keamanan */}
          <div
            className="flex items-center justify-between p-3 border-b cursor-pointer"
            onClick={() => navigate("./aturan")}
          >
            <div className="flex items-center gap-2">
              <IoShieldCheckmark className="font-bold" />
              <p className="text-xl font-semibold">Keamanan & Privasi</p>
            </div>
            <span className="text-xl">›</span>
          </div>

          {/* Logout */}
          <div
            className="flex items-center justify-between p-3 cursor-pointer"
            onClick={() => setShowLogoutModal(true)}
          >
            <div className="flex items-center gap-2">
              <CiLogout className="font-bold" />
              <p className="text-xl font-semibold">Keluar</p>
            </div>
            <span className="text-xl">›</span>
          </div>
        </div>
      </div>

      {/* Modal Ubah Profil */}
      {open && <Card setOpenn={setOpen} />}

      {/* Modal Logout */}
      {showLogoutModal && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-80">
            <h2 className="text-lg font-semibold mb-4">Konfirmasi</h2>
            <p className="mb-6">Apakah Anda yakin ingin keluar?</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowLogoutModal(false)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleLogout}
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
