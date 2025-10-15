import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getChildById } from "../../../Services/database";
import { useAuth } from "../../../Services/useAuth";
// import CircularProgressBaby from "./CircularProgressBaby"; 
import CircularProgressBaby from "./ProgresBar";

const CatatanBayi = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("childId");
  const { user, loading } = useAuth();
  const [data, setData] = useState();

  const calculateAgeInYearsAndMonths = (birthDate) => {
    const now = new Date();
    const birth = new Date(birthDate);

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return `${years} tahun ${months} bulan`;
  };

  const calculateAgeInMonths = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    const months =
      (today.getFullYear() - birth.getFullYear()) * 12 +
      (today.getMonth() - birth.getMonth());
    return months;
  };

  // Tentukan range umur berdasarkan umur anak dalam bulan
  const getAgeRange = (ageInMonths) => {
    if (ageInMonths >= 12 && ageInMonths <= 17) return "12-17";
    if (ageInMonths >= 18 && ageInMonths <= 23) return "18-23";
    if (ageInMonths >= 24 && ageInMonths <= 36) return "24-36";
    return null;
  };

  // Hitung persentase development berdasarkan umur anak
  const calculateDevelopmentProgress = () => {
    if (!data || !data.developments) return 0;

    const ageInMonths = calculateAgeInMonths(data.birthDate);
    const currentAgeRange = getAgeRange(ageInMonths);

    if (!currentAgeRange || !data.developments[currentAgeRange]) return 0;

    const currentDev = data.developments[currentAgeRange];
    const total = Object.keys(currentDev).length;
    const completed = Object.values(currentDev).filter(Boolean).length;

    return Math.round((completed / total) * 100);
  };

  const formatDate = (isoString) => {
    if (!isoString) return null;
    const date = new Date(isoString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const fetchChild = async () => {
      const child = await getChildById(user.uid, id);
      setData(child);
    };

    if (user?.uid && !loading) {
      fetchChild();
    }
  }, [user, loading]);

  const progressPercentage = calculateDevelopmentProgress();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#C25E2E] py-3">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
          {/* Logo dan Tulisan */}
          <div className="flex items-center pr-14">
            <img src="/Logo.png" alt="logo" className="w-16 object-cover" />
            <img src="/3.png" alt="tulisanLogo" className="w-24" />
          </div>

          {/* Navigation */}
          <div className="flex gap-4 text-white font-semibold text-sm cursor-pointer">
            <span onClick={() => navigate("/beranda")}>Beranda</span>
            <span onClick={() => navigate(`/perkembangan`)}>
              Pemantauan perkembangan
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-10">
        <h1 className="text-xl font-bold">Catatan perkembangan</h1>
        <p className="text-gray-600 mb-6">
          Abadikan setiap momen dari perkembangan si kecil
        </p>

        {/* Card Progress */}
        {data && (
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
            {/* Header Card */}
            <div className="flex items-center gap-3 mb-4">
              {/* Icon Gender */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  data.gender === "Laki-laki" ? "bg-blue-100" : "bg-pink-100"
                }`}
              >
                {data.gender === "Laki-laki" ? (
                  <span className="text-blue-600 text-xl">♂</span>
                ) : (
                  <span className="text-pink-600 text-xl">♀</span>
                )}
              </div>

              {/* Info Anak */}
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{data.name}</h3>
                <p className="text-sm text-gray-500">
                  {calculateAgeInYearsAndMonths(data.birthDate)}
                </p>
              </div>

              {/* Badge Progress */}
              <div className="text-right">
                <span className="text-xs text-gray-500">Progress</span>
              </div>
            </div>

            {/* Content Card */}
            <div className="flex items-center justify-between">
              {/* Button Perkembangan */}
              <div
                onClick={() => navigate("/perkembangan")}
                className={`cursor-pointer ${
                  data.gender === "Laki-laki"
                    ? "bg-gradient-to-br from-blue-400 to-blue-500"
                    : "bg-gradient-to-br from-purple-400 to-purple-500"
                } rounded-2xl p-6 flex flex-col items-center justify-center w-32 h-32 transition-transform hover:scale-105`}
              >
                <div className="text-4xl mb-2">📊</div>
                <span className="text-white font-semibold text-sm text-center">
                  Perkembangan
                </span>
              </div>

              {/* Circular Progress */}
              <div className="flex flex-col items-center">
                <CircularProgressBaby
                  percentage={progressPercentage}
                  size={140}
                  color={data.gender === "Laki-laki" ? "#60a5fa" : "#c084fc"}
                />
              </div>
            </div>

            {/* Footer Card */}
            {data.lastDevelopmentUpdate && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Terakhir diperbarui: {formatDate(data.lastDevelopmentUpdate)}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CatatanBayi;