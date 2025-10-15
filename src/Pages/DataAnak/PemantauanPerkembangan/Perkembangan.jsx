import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import {
  getChildById,
  updateChildDevelopment,
} from "../../../Services/database";
import { useAuth } from "../../../Services/useAuth";
import { Childd } from "../AnakConteks";

const Perkembangan = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("childId");
  const { user, loading } = useAuth();
  const [data, setData] = useState();

  const chil = useContext(Childd);

  
  if (!chil) {
    // Bisa tampilkan loader atau fallback lainnya
    return (
      <p className="text-center mt-10 text-gray-500">Memuat data anak...</p>
    );
  }

  // Text untuk setiap range umur
  const developmentTextsByAge = {
    "12-17": [
      "Anak bisa berjalan sendiri tanpa berpegangan",
      "Anak bisa membungkuk memungut mainan kemudian berdiri kembali",
      "Anak bisa berjalan mundur lima langkah?",
      "anak bisa memasukan kubus di kotak",
      "anak bisa memanggi; ayah dengan kata 'papa', memanggil ibu dengan kata 'mama'? ",
      "Anak bisa menumpuk dua kubus",
      "anak bisa menunjuk apa yang diinginkan tanpa menangis/merengek, anak bisa mengeluarkan suara yang menyenangkan atau menarik tangan ibu?",
      "Anak bisa memperlihatkan rasa cemburu/ bersaing",
    ],
    "18-23": [
      "Anak bisa berdiri sendiri tanpa pegangan 30 detik",
      "Anak bisa berjalan tanpa terhuyung-huyung",
      "Anak bisa menumpuk 4 buah kubus",
      "Anak bisa memungut benda kecil dengan ibu jari dan jari telunjuk",
      "Anak bisa bisa menggelindingkan bola ke arah sasaran",
      "Anak bisa menyebut 3-6 kata yang mempunyai arti",
      "Anak bisa membantu/menirukan pekerjaan rumah tangga",
      "Anak bisa memegang cangkir sendiri, belajar makan minum sendiri",
    ],
    "24-36": [
      "Anak bisa berjalan naik tangga sendiri",
      "Anak bisa bermain dan menendang bola kecil",
      "Anak bisa mencoret-coret pensil pada kertas",
      "Anak bisa berbicara dengan baik, menggunakan 2 kata",
      "Anak bisa menunjuk satu atau lebih bagian tubuhnya ketika diminta",
      "Anak bisa melihat gambar dan dapat menyebut dengan benar nama 2 benda atau lebih ",
      "Anak bisa membantu memmungut mainanya sendiri atau membantu mengangkat piting jika diminta",
      "Anak bisa makan  nasi sendiri  tanpa banyak tumpah",
      "Anak bisa menyebutkan nama lengkapnya",
      "Anak bisa melepas pakaian sendiri",
    ],
  };

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
    return null; // Jika di luar range
  };

  const handleCheck = async (ageRange, key) => {
    if (!data || !user) return;

    const newValue = !data.developments[ageRange][key];

    try {
      // Update di Firestore
      await updateChildDevelopment(user.uid, id, ageRange, key, newValue);

      // Update state lokal
      setData((prev) => ({
        ...prev,
        developments: {
          ...prev.developments,
          [ageRange]: {
            ...prev.developments[ageRange],
            [key]: newValue,
          },
        },
        lastDevelopmentUpdate: new Date().toISOString(),
      }));
    } catch (error) {
      console.error("Error updating development:", error);
      alert("Gagal update data");
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return null;
    const date = new Date(isoString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // useEffect(() => {
  //   const fetchChild = async () => {
  //     const child = await getChildById(user.uid, id);
  //     setData(child);
  //   };

  //   if (user?.uid && !loading) {
  //     fetchChild();
  //   }
  // }, [user, loading]);

  // Tentukan range umur dan text yang sesuai
  const ageInMonths = chil ? calculateAgeInMonths(chil.birthDate) : 0;
  const currentAgeRange = getAgeRange(ageInMonths);
  const developmentTexts = currentAgeRange
    ? developmentTextsByAge[currentAgeRange]
    : [];
  const currentDevelopments = chil?.developments?.[currentAgeRange] || {};

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#C25E2E] p-4 flex justify-between items-center">
        <div className="flex items-center ">
          <img src="/Logo.png" alt="" className="object-cover w-20 " />
          <img src="/3.png" alt="tulisanLogo" className="w-30" />
        </div>
        <div className="flex gap-4 text-white font-semibold text-sm">
          <span onClick={() => navigate("/beranda")} className="cursor-pointer">
            Beranda
          </span>
          <span
            onClick={() => {
              const id = localStorage.getItem("childId");
              navigate(`/anak/${id}`);
            }}
            className="cursor-pointer"
          >
            Dashboard
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-10">
        <h1 className="text-xl font-bold">Perkembangan</h1>

        {data && (
          <div className="flex items-center text-sm text-gray-600 mt-1 mb-2">
            <span>{data.name}</span>
            <FaCircle className="text-[6px] mx-2" />
            <span>{calculateAgeInYearsAndMonths(data.birthDate)}</span>
          </div>
        )}

        {/* Info Range Umur */}
        {currentAgeRange && (
          <div className="mb-6">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              Range Umur: {currentAgeRange} bulan
            </div>
          </div>
        )}

        {/* Checklist Card */}
        {chil && currentAgeRange && currentDevelopments ? (
          <div
            className={`${
              chil.gender === "Laki-laki"
                ? "bg-gradient-to-br from-blue-400 to-blue-500"
                : "bg-gradient-to-br from-purple-400 to-purple-500"
            } rounded-3xl p-4`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-white text-base font-semibold leading-tight flex-1 pr-4">
                Lakukan pemeriksaan perkembangan dengan ceklist di bawah ini
              </h2>
            </div>

            {/* Checklist Items */}
            <div className="max-h-80 overflow-y-auto space-y-3 pr-1">
              {Object.keys(currentDevelopments).map((key, index) => (
                <label
                  key={key}
                  className="flex items-start gap-3 cursor-pointer group bg-white hover:bg-gray-300 transition-colors rounded-lg p-3"
                >
                  <input
                    type="checkbox"
                    checked={currentDevelopments[key] || false}
                    onChange={() => handleCheck(currentAgeRange, key)}
                    className={`mt-0.5 w-5 h-5 rounded border-2 bg-white ${
                      chil.gender === "Laki-laki"
                        ? "border-blue-200 text-blue-600 focus:ring-blue-400"
                        : "border-purple-200 text-purple-600 focus:ring-purple-400"
                    } focus:ring-2 cursor-pointer flex-shrink-0`}
                  />
                  <span
                    className={`text-sm font-serif leading-relaxed transition-colors ${
                      currentDevelopments[key]
                        ? "text-black line-through"
                        : "text-black"
                    }`}
                  >
                    {developmentTexts[index]}
                  </span>
                </label>
              ))}
            </div>

            {/* Progress Info */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="text-center text-white text-sm font-semibold">
                {Object.values(currentDevelopments).filter(Boolean).length} /{" "}
                {Object.keys(currentDevelopments).length} selesai
              </div>
              {chil.lastDevelopmentUpdate && (
                <div className="text-center text-white/80 text-xs mt-2">
                  Terakhir diperbarui: {formatDate(data.lastDevelopmentUpdate)}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <p className="text-gray-600">
              {!currentAgeRange
                ? "Checklist perkembangan tersedia untuk usia 12-36 bulan"
                : "Data perkembangan tidak tersedia"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Perkembangan;
