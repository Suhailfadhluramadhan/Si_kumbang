import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
    const navigate= useNavigate()
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4 border-b gap-6 border-gray-200">
        <Link to="/beranda">
        <FaArrowLeft  onClick={()=> navigate("./beranda")}/>
      </Link>
       
        <h1 className="text-sm font-semibold">Kebijakan Keamanan Privasi</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 text-sm text-gray-800 leading-relaxed">
        <h2 className="text-center font-bold uppercase text-xs">
          Syarat dan Ketentuan Penggunaan Website Si-Kumbang
        </h2>

        <p>Selamat datang di Si-Kumbang</p>

        <p>
          Mohon untuk membaca seluruh syarat dan ketentuan penggunaan serta
          kebijakan keamanan privasi terlebih dahulu dengan cermat dan seksama
          sebelum menggunakan setiap fitur yang tersedia di Si-Kumbang
        </p>

        <p>
          Syarat dan Ketentuan Penggunaan (
          <strong>‘Ketentuan Penggunaan’</strong>) ini merupakan perjanjian
          antara Anda sebagai pengguna (<strong>‘Pengguna’</strong>) dengan
          pengelola website Si-Kumbang (<strong>‘Kami’, ‘Pengelola’</strong>)
          terkait tata cara dan persyaratan penggunaan fitur (
          <strong>‘Fitur’</strong>) yang tersedia di dalam website Si-Kumbang (
          <strong>‘Website’</strong>).
        </p>
        <p>
          Dengan mengakses dan/atau menggunakan Website ini, Anda dianggap telah
          membaca, memahami, dan menyetujui seluruh isi dari Ketentuan
          Penggunaan ini. Apabila Anda tidak menyetujui salah satu atau lebih
          butir syarat, ketentuan, dan kebijakan yang ada, silakan untuk tidak
          melanjutkan penggunaan Website Si-Kumbang.
        </p>
        <br />
        <ul className="list-decimal pl-5 space-y-2 text-sm text-gray-800">
          <li>
            <h1 className="text-xl font-semibold">Ketentuan umum</h1>
            <ul className="list-[lower-alpha] pl-6 mt-2 text- space-y-1">
              <li>
                Website Si-Kumbang adalah platform berbasis web yang
                dikembangkan sebagai sarana edukasi dan pemantauan tumbuh
                kembang anak usia 1–3 tahun.
              </li>
              <li>
                Pengguna website adalah orang tua, wali, kader, atau tenaga
                kesehatan.
              </li>
              <li>Website tidak berfungsi sebagai fasilitas kesehatan.</li>
              <li>Koneksi internet diperlukan.</li>
              <li>Pengelola dapat melakukan perubahan fitur.</li>
              <li>Data tersimpan dengan enkripsi.</li>
              <li>Pengelola tidak membagikan data pribadi ke pihak ketiga.</li>
            </ul>
          </li>
          <li>
            <h1 className="text-xl font-semibold">
              Ketentuan Penggunaan Website
            </h1>
            <ul className="list-[lower-alpha] pl-6 mt-2 text- space-y-1">
              <li>
                Pengguna website Si-Kumbang adalah orang tua, wali, kader, atau
                tenaga kesehatan yang menggunakan layanan untuk memantau
                pertumbuhan dan perkembangan anak usia 1–3 tahun. Dengan
                mengakses website, pengguna dianggap telah membaca, memahami,
                dan menyetujui seluruh ketentuan yang berlaku.
              </li>
              <li>
                Pengguna wajib memasukkan data secara benar, lengkap, dan dapat
                dipertanggungjawabkan, termasuk data pribadi anak seperti nama,
                jenis kelamin, tanggal lahir, berat badan, dan tinggi badan.
              </li>
              <li>
                Data pribadi yang disimpan dalam sistem dienkripsi untuk menjaga
                keamanan dan kerahasiaan informasi. Data hanya digunakan untuk
                kepentingan pemantauan tumbuh kembang dan peningkatan layanan
                sesuai ketentuan perundang-undangan yang berlaku.
              </li>
              <li>
                Pengguna bertanggung jawab atas aktivitas yang dilakukan selama
                menggunakan website dan tidak diperbolehkan menyalahgunakan
                data, fitur, maupun informasi yang tersedia
              </li>
              <li>
                informasi yang disediakan dalam website bersifat edukatif dan
                bersumber dari Buku KIA, Denver Developmental Screening Test
                (DDST), serta referensi tenaga kesehatan. Website ini tidak
                menggantikan konsultasi medis dan tidak digunakan sebagai dasar
                diagnosis atau pengobatan.
              </li>
              <li>
                Pengguna diharapkan menggunakan informasi sesuai dengan tujuan
                pemantauan dan edukasi tumbuh kembang anak, serta tidak
                menyebarluaskan data atau konten dari website tanpa izin dari
                pengelola.
              </li>
              <li>
                Pengelola berhak untuk memperbarui, mengubah, atau menonaktifkan
                sebagian maupun seluruh fitur website sesuai kebutuhan
                pengembangan sistem.
              </li>
              <li>
                Website dapat menampilkan konten edukatif berupa teks dan video
                yang bersumber dari Kementerian Kesehatan Republik Indonesia
                serta dokter anak. Pengelola tidak bertanggung jawab atas
                kesalahan penafsiran terhadap informasi yang ditampilkan.
              </li>
              <li>
                Pengguna diwajibkan untuk menjaga kerahasiaan akun dan tidak
                memberikan akses kepada pihak lain. Segala bentuk penyalahgunaan
                akun menjadi tanggung jawab pengguna sepenuhnya.
              </li>
            </ul>
          </li>
          <li>
            <h1 className="text-xl font-semibold">
              Ketentuan Penggunaan Website
            </h1>
            <ul className="list-[lower-alpha] pl-6 mt-2 text- space-y-1">
              <li>
                Status gizi
                <p>
                  Fitur ini menampilkan interpretasi status gizi anak dalam
                  bentuk grafik pertumbuhan menggunakan standar Z-score.
                </p>
              </li>
              <li>
                Pemantauan perkembangan
                <p>
                  Fitur ini digunakan untuk deteksi dini perkembangan anak
                  dengan panduan dari Buku KIA.
                </p>
              </li>
              <li>
                Stimulasi
                <p>
                  Fitur ini berisi panduan aktivitas sederhana berdasarkan
                  Denver Developmental Screening Test (DDST) yang sesuai dengan
                  usia anak.
                </p>
              </li>
              <li>
                Imunisasi
                <p>
                  Fitur ini menyediakan informasi dan jadwal imunisasi anak
                  berdasarkan kategori usia.
                </p>
              </li>
              <li>
                Catatan perkemangan
                <p>
                  Catatan perkemangan Fitur ini menampilkan visualisasi capaian
                  perkembangan anak dalam bentuk pie chart.
                </p>
              </li>
              <li>
                Konten edukasi
                <p>
                  Fitur ini menyediakan teks, dan video edukatif mengenai tumbuh
                  kembang anak dan macam-macam stimulasi perkembangan yang
                  sesuai dengan usia anak Fitur ini hanya bertujuan untuk
                  edukasi, bukan pengganti konsultasi medis.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
