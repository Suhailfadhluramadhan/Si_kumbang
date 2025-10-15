import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getChildById } from "../../../Services/database";
import { useAuth } from "../../../Services/useAuth";

const AccordionItem = ({ title, children, gender, isNested = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const bgColor = gender === "Laki-laki" ? "bg-blue-400" : "bg-purple-400";
  const bgColorNested =
    gender === "Laki-laki" ? "bg-blue-200" : "bg-purple-200";

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full p-4 ${
          isNested ? bgColorNested : bgColor
        } font-semibold text-left`}
      >
        <span>{title}</span>
        <IoIosArrowDown
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="bg-white px-4 py-2 space-y-2">{children}</div>}
    </div>
  );
};
const stimulasiData2 = [
  {
    title: "Personal Sosial",
    items: [
      {
        title: "Menyebutkan nama teman",
        img: "/Ps1.jpg",
        desc: "Ajak anak bermain bersama teman. Tanyakan, “Siapa nama temanmu?” dan dorong anak untuk menyebutkan nama temannya sendiri.",
      },
      {
        title: "Berpakaian tanpa bantuan",
        img: "/Ps2.jpg",
        desc: "Berikan pakaian yang mudah dipakai, seperti kaos oblong atau celana karet. Tunjukkan cara memakainya, lalu biarkan anak mencoba memakai dan melepas sendiri tanpa banyak bantuan. Beri pujian setiap kali ia berhasil.",
      },
      {
        title: "Sikat gigi tanpa bantuan",
        img: "/Ps3.jpg",
        desc: "Berikan anak sikat gigi dan pasta gigi anak. Biarkan anak menggosok giginya sendiri, lalu periksa kembali agar gigi tetap bersih.",
      },
    ],
  },
  {
    title: "Motorik Halus",
    items: [
      {
        title: "Meniru garis lurus",
        img: "/Mh1.jpg",
        desc: "Gambar garis lurus ke bawah di kertas, lalu minta anak menirukan dengan pensil atau krayon.",
      },
      {
        title: "Menyusun menara dari kubus",
        img: "/Mh2.jpg",
        desc: "Berikan beberapa balok. Ajak anak menyusun balok ke atas hingga menjadi menara setinggi yang ia bisa.",
      },
      {
        title: "Menggoyangkan ibu jari",
        img: "/Mh3.jpg",
        desc: "Tunjukkan cara menggerakkan ibu jari ke atas dan ke bawah, lalu ajak anak menirukan gerakan itu.",
      },
    ],
  },
  {
    title: "Motorik Kasar",
    items: [
      {
        title: "Berdiri dengan satu kaki selama 4 detik",
        img: "/Mk1.jpg",
        desc: "Tunjukkan cara berdiri dengan satu kaki. Minta anak mencoba menirukan dan hitung sampai empat detik.",
      },
      {
        title: "Berdiri dengan satu kaki selama 8 detik",
        img: "/Mk2.jpg",
        desc: "Setelah terbiasa berdiri dengan satu kaki, ajak anak mencoba lebih lama hingga delapan detik.",
      },
    ],
  },
  {
    title: "Bahasa",
    items: [
      {
        title: "Mengerti 2 kata sifat",
        img: "/B1.jpg",
        desc: "Ajak anak memahami kata sifat sederhana, misalnya besar-kecil atau panas-dingin. Berikan contoh nyata, seperti “bola besar” dan “bola kecil.”",
      },
      {
        title: "Menyebutkan satu warna",
        img: "/B2.jpg",
        desc: "Tunjukkan benda berwarna, misalnya bola kuning atau baju kuning. Tanyakan warnanya, lalu dorong anak menyebutkan.",
      },
      {
        title: "Menyebutkan kegunaan 2 benda",
        img: "/B3.jpg",
        desc: "Perlihatkan dua benda sehari-hari, misalnya sendok dan sepatu. Tanyakan kegunaannya, seperti “Sendok untuk makan” dan “Sepatu untuk dipakai di kaki.”",
      },
    ],
  },
];

const stimulasiData1 = [
  {
    title: "Personal Sosial",
    items: [
      {
        title: "Menggunakan sendok/garpu",
        img: "/Ps-1.jpg",
        desc: "Ajari anak makan dengan sendok atau garpu. Tunjukkan cara menyendok makanan, lalu biarkan anak mencoba sendiri meskipun masih berantakan.",
      },
      {
        title: "Membuka pakaian",
        img: "/Ps-2.jpg",
        desc: "Ajak anak membuka pakaian sederhana, seperti topi atau jaket. Biarkan ia mencoba menarik atau melepas sendiri, lalu bantu bila kesulitan.",
      },
      {
        title: "Bermain pura-pura memberi makan boneka",
        img: "/Ps-3.jpg",
        desc: "Beri anak boneka dan sendok mainan. Tunjukkan cara pura-pura memberi makan boneka, lalu biarkan ia menirukan kegiatan tersebut.",
      },
    ],
  },
  {
    title: "Motorik Halus",
    items: [
      {
        title: "Menyusun menara balok",
        img: "/Mh2.jpg",
        desc: "Ajak anak menyusun balok menjadi menara. Mulailah dari dua balok, lalu tingkatkan menjadi empat hingga enam balok sesuai kemampuan anak. Bila menara jatuh, dorong anak mencoba lagi dengan sabar.",
      },
      {
        title: "Mengambil benda kecil",
        img: "/Mh-1.jpg",
        desc: "Sediakan benda kecil yang aman, misalnya kancing besar atau tutup botol. Tunjukkan cara mengambil dengan jari, lalu biarkan anak mencoba memindahkan ke wadah.",
      },
    ],
  },
  {
    title: "Motorik Kasar",
    items: [
      {
        title: "Menendang bola ke depan",
        img: "/Mk-1.jpg",
        desc: "Jika anak sudah bisa berjalan sendiri, letakkan bola berukuran sedang di depannya. Tunjukkan cara menendang ke depan, lalu biarkan anak menirukan.",
      },
      {
        title: "Melompat",
        img: "/Mk-2.jpg",
        desc: "Jika anak sudah bisa berdiri dan berjalan stabil, ajak ia melompat di tempat dengan kedua kaki. Bisa juga diberi garis di lantai atau bantal kecil untuk dilompati agar lebih menyenangkan.",
      },
      {
        title: "Berjalan mundur sambil menarik mainan",
        img: "/Mk-3.jpg",
        desc: "Jika anak sudah dapat berjalan sendiri, ajarkan ia melangkah mundur dengan memberikan mainan tarik agar ia mundur sambil memperhatikan mainannya.",
      },
    ],
  },
  {
    title: "Bahasa",
    items: [
      {
        title: "Menunjuk 2 gambar",
        img: "/B-1.jpg",
        desc: ".Tunjukkan dua gambar sederhana, misalnya gambar kucing dan bola. Minta anak menunjuk gambar yang disebut, seperti “Mana kucing?” atau “Tunjuk bola“",
      },
      {
        title: "Mengenal 6 bagian tubuh",
        img: "/B-2.jpg",
        desc: "Ajak anak menyebut dan menunjukkan bagian tubuh, seperti kepala, mata, hidung, mulut, tangan, dan kaki. Bisa sambil bermain di depan cermin.",
      },
      {
        title: "Kombinasi kata",
        img: "/B-3.jpg",
        desc: "Ajak anak menggabungkan dua kata, misalnya “mau susu”, “ambil bola”, atau “duduk sini.” Orang tua bisa mencontohkan dulu agar anak meniru.",
      },
    ],
  },
];

const NestedAccordion = ({ gender, ageInMonths }) => {
  const stimulasiData = ageInMonths < 24 ? stimulasiData1 : stimulasiData2;
  return (
    <div className="p-4 space-y-4">
      {stimulasiData.map((kategori, idx) => (
        <AccordionItem key={idx} title={kategori.title} gender={gender}>
          {kategori.items.map((item, i) => (
            <AccordionItem
              key={i}
              title={item.title}
              gender={gender}
              isNested={true}
            >
              <img src={item.img} alt={item.title} className="mb-2" />
              <p className="text-sm text-gray-600">{item.desc}</p>
            </AccordionItem>
          ))}
        </AccordionItem>
      ))}
    </div>
  );
};

// ---------- Main Page ----------
const StimulasiPage = () => {
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

  useEffect(() => {
    const fetchChild = async () => {
      const child = await getChildById(user.uid, id);
      setData(child);
    };

    if (user?.uid && !loading) {
      fetchChild();
    }
  }, [user, loading]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#C25E2E] p-4 flex justify-between items-center">
        <div className="flex items-center ">
          <img src="/Logo.png" alt="" className="object-cover w-20 " />

          <img src="/3.png" alt="tulisanLogo" className="w-30" />
        </div>
        <div className="flex gap-4 text-white font-semibold text-sm">
          <span onClick={() => navigate("/beranda")}>Beranda</span>
          <span
            onClick={() => {
              const id = localStorage.getItem("childId");
              navigate(`/anak/${id}`);
            }}
          >
            Dashboard
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4">
        <h1 className="text-xl font-bold">Stimulasi</h1>

        {data && (
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <span>{data.name}</span>
            <FaCircle className="text-[6px] mx-2" />
            <span>{calculateAgeInYearsAndMonths(data.birthDate)}</span>
          </div>
        )}

        {data && (
          <NestedAccordion
            gender={data.gender}
            ageInMonths={calculateAgeInMonths(data.birthDate)}
          />
        )}
      </div>
    </div>
  );
};

export default StimulasiPage;
