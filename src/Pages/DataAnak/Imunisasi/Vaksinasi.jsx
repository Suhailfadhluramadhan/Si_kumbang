import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getChildById,
  updateChildImmunization,
} from "../../../Services/database";
import { useAuth } from "../../../Services/useAuth";

// Metadata vaksin (info statis)
const vaccineMetadata = {
  a: {
    name: "Hepatitis A 1",
    month: 12,
    benefit: "Mencegah infeksi hepatitis A",
    afterImun: "Nyeri/bengkak/kemerahan tempat penyuntikan, demam",
  },
  b: {
    name: "PCV 4",
    month: 12,
    benefit: "Mencegah penyakit pneumonia (radang/infeksi paru)",
    afterImun:
      "Nyeri/bengkak/kemerahan tempat penyuntikan, rewel, diare, demam, gatal-gatal",
  },
  c: {
    name: "Varisela 1",
    month: 12,
    benefit: "Mencegah cacar air",
    afterImun: "Nyeri/bengkak/kemerahan tempat penyuntikan, demam, ruam ringan",
  },
  d: {
    name: "Varisela 2",
    month: 14,
    benefit: "Booster vaksin cacar air",
    afterImun: "Nyeri/bengkak/kemerahan tempat penyuntikan, demam, ruam ringan",
  },
  e: {
    name: "DPT 4",
    month: 18,
    benefit:
      "Mencegah infeksi difteri yang menyebabkan penyumbatan jalan nafas",
    afterImun: "Nyeri/bengkak/kemerahan tempat penyuntikan, demam, gelisah",
  },
  f: {
    name: "Hepatitis A 2",
    month: 18,
    benefit: "Mencegah infeksi hepatitis A",
    afterImun: "Nyeri/bengkak/kemerahan tempat penyuntikan, demam",
  },
  g: {
    name: "Polio 4",
    month: 18,
    benefit:
      "Mencegah penyakit polio yang dapat menyebabkan lumpuh layuh pada tungkai dan atau lengan",
    afterImun: "Penyakit polio yang timbul akibat vaksin OPV",
  },
  h: {
    name: "HIB 4",
    month: 18,
    benefit:
      "Mencegah infeksi Hib menyebabkan meningitis (infeksi/radang selaput otak) dan pneumonia (infeksi paru)",
    afterImun: "Nyeri/bengkak/kemerahan tempat penyuntikan, rewel, demam",
  },
  i: {
    name: "Hepatitis B 4",
    month: 18,
    benefit:
      "Mencegah penyakit  hepatitis B yang dapat menyebabkan kerusakan hati",
    afterImun:
      "Nyeri/bengkak/kemerahan, bengkak yang ringan dan bersifat sementara Kadang-kadang demam ringan 1-2 hari",
  },
  j: {
    name: "Influenza 3",
    month: 18,
    benefit: "Mencegah sakit berat akibat influenza",
    afterImun:
      "Nyeri/bengkak/kemerahan tempat penyuntikan, demam, nyeri otot, nyeri kepala, alergi",
  },
  k: {
    name: "MR/MMR 2",
    month: 18,
    benefit:
      "Mencegah penyakit gondongan, campak jerman, radang testis pada lelaki",
    afterImun:
      "Nyeri/bengkak/kemerahan tempat penyuntikan, demam, lemas, alergi",
  },
  l: {
    name: "Tifoid 1",
    month: 24,
    benefit: " Mencegah penyakit tifoid",
    afterImun:
      "Demam, nyeri kepala, pusing, nyeri sendi, mual, nyeri perut, alergi.",
  },
  m: {
    name: "Influenza 4",
    month: 30,
    benefit: "mencegah sakit berat akibat influenza",
    afterImun:
      "nyeri/bengkak/kemerahan tempat penyuntikan, demam, nyeri otot, nyeri kepala,alergi",
  },
  n: {
    name: "Influenza 5",
    month: 36,
    benefit: "Mencegah sakit berat akibat influenza",
    afterImun:
      "Nyeri/bengkak/kemerahan tempat penyuntikan, demam, nyeri otot, nyeri kepala, alergi.",
  },
};

// Fungsi untuk menghitung tanggal rekomendasi berdasarkan tanggal lahir
const calculateVaccineDate = (birthDate, monthsToAdd) => {
  const birth = new Date(birthDate);
  const vaccineDate = new Date(birth);
  vaccineDate.setMonth(vaccineDate.getMonth() + monthsToAdd);

  return vaccineDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Fungsi untuk mengelompokkan vaksin berdasarkan bulan
const groupVaccinesByMonth = (immunizations, birthDate) => {
  if (!immunizations || !birthDate) return {};

  const grouped = {};

  try {
    // Urutkan keys dulu sebelum diproses agar konsisten
    const sortedKeys = Object.keys(immunizations).sort();

    sortedKeys.forEach((key) => {
      const status = immunizations[key];
      const metadata = vaccineMetadata[key];
      if (metadata) {
        const month = metadata.month;
        if (!grouped[month]) {
          grouped[month] = [];
        }
        grouped[month].push({
          key,
          name: metadata.name,
          date: calculateVaccineDate(birthDate, month),
          benefit: metadata.benefit,
          afterImun: metadata.afterImun,
          status,
        });
      }
    });

    // Sort vaccine dalam setiap bulan berdasarkan key
    Object.keys(grouped).forEach((month) => {
      grouped[month].sort((a, b) => a.key.localeCompare(b.key));
    });
  } catch (error) {
    console.error("Error grouping vaccines:", error);
    return {};
  }

  return grouped;
};

const Vaksinasi = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("childId");
  const { user, loading } = useAuth();
  const [data, setData] = useState();
  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleVaccineClick = (vaccine) => {
    setSelectedVaccine(vaccine);
    setShowModal(true);
  };

  const handleUpdateStatus = async () => {
    if (!data || !user || !selectedVaccine) return;

    const newValue = !selectedVaccine.status;

    try {
      await updateChildImmunization(
        user.uid,
        id,
        selectedVaccine.key,
        newValue
      );

      setData((prev) => ({
        ...prev,
        immunizations: {
          ...prev.immunizations,
          [selectedVaccine.key]: newValue,
        },
      }));

      setSelectedVaccine({
        ...selectedVaccine,
        status: newValue,
      });

      setShowModal(false);
    } catch (error) {
      console.error("Error updating immunization:", error);
      alert("Gagal update data");
    }
  };

  useEffect(() => {
    const fetchChild = async () => {
      try {
        const child = await getChildById(user.uid, id);

        setData(child);
      } catch (error) {
        console.error("Error fetching child:", error);
        alert("Gagal mengambil data anak");
      }
    };

    if (user?.uid && !loading && id) {
      fetchChild();
    }
  }, [user, loading, id]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#C25E2E] p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Logo.png" alt="" className="object-cover w-20" />
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
        <h1 className="text-xl font-bold">Vaksinasi</h1>

        {data && (
          <div className="flex items-center text-sm text-gray-600 mt-1 mb-6">
            <span>{data.name}</span>
            <FaCircle className="text-[6px] mx-2" />
            <span>{calculateAgeInYearsAndMonths(data.birthDate)}</span>
          </div>
        )}

        <div className="space-y-4">
          {data && data.immunizations ? (
            Object.entries(
              groupVaccinesByMonth(data.immunizations, data.birthDate)
            )
              .sort(([a], [b]) => parseInt(a) - parseInt(b))
              .map(([month, vaccines]) => (
                <div key={month} className="bg-[#FFD4C2] rounded-2xl p-4">
                  <div className="rounded-full px-4 py-2 inline-block mb-4">
                    <span className="font-bold text-sm">{month} Bulan</span>
                    <div className="text-xs text-black m-1 p-2 border-4 rounded-3xl border-dashed border-gray-300">
                      Direkomendasikan pada {vaccines[0]?.date || "-"}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {vaccines.map((vaccine) => (
                      <div
                        key={vaccine.key}
                        onClick={() => handleVaccineClick(vaccine)}
                        className="bg-white rounded-full px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">
                            {vaccine.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              vaccine.status
                                ? "bg-green-100 text-green-600"
                                : "bg-cyan-100 text-cyan-600"
                            }`}
                          >
                            {vaccine.status ? "Sudah" : "Belum"}
                          </span>
                          <IoIosArrowForward className="text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center text-gray-500 py-8">
              Loading data vaksin...
            </div>
          )}
        </div>
      </div>

      {showModal && selectedVaccine && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full relative border-4 border-purple-500">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <IoClose size={24} />
            </button>

            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">{selectedVaccine.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                Tanggal Direkomendasikan
              </p>
              <p className="text-red-500 font-bold mb-4">
                {selectedVaccine?.date?.toString?.() || "-"}
              </p>

              <div className="text-left mb-6">
                <h3 className="font-bold text-sm mb-2">Manfaat</h3>
                <p className="text-sm text-gray-600">
                  {selectedVaccine.benefit}
                </p>
              </div>

              <div className="text-left mb-6">
                <h3 className="font-bold text-sm mb-2">
                  Kejadian pasca imunisasi
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {selectedVaccine.afterImun}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">Status Imunisasi</span>
                  <span
                    className={`text-xs font-semibold px-4 py-1.5 rounded-full ${
                      selectedVaccine.status
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {selectedVaccine.status ? "Sudah" : "Belum"}
                  </span>
                </div>
              </div>

              <button
                onClick={handleUpdateStatus}
                className="w-full bg-white border-2 border-purple-500 text-purple-500 font-semibold py-3 rounded-full hover:bg-purple-50 transition-colors"
              >
                Edit Status Imunisasi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vaksinasi;
