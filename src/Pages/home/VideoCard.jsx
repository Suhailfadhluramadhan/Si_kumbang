// src/components/VideoCard.jsx
import React from "react";
import { useState, useEffect } from "react";
import { IoIosWarning } from "react-icons/io";

const VideoCard = ({ thumbnail, title, text, link, id }) => {
  let teks;
  const [open, setOpen] = useState(false);

  if (id === 1) {
    teks = (
      <>
        <div className="flex-1 overflow-y-auto p-2 bg-amber-600 rounded-t-2xl text-white font-serif">
          <p>
            Milestone merupakan titik pencapaian tumbuh kembang anak, yang
            meliputi berbagai kemampuan fisik atau perilaku yang dicapai anak,
            seiring dengan bertambahnya usia anak maka milestone perkembangan
            akan terus bertambah
          </p>
          <div>
            <p className="font-semibold mb-1">
              • Milestone usia anak 12–18 bulan
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Sudah bisa berjalan sendiri</li>
              <li>
                Sudah bisa menyebutkan beberapa kata (mama, papa, dan
                sebagainya)
              </li>
              <li>Bisa belajar untuk makan sendiri</li>
              <li>Mulai menirukan aktivitas orang di sekitarnya</li>
            </ol>
          </div>

          <br />
          <div>
            <p className="font-semibold mb-1">
              • Milestone usia anak 18–24 bulan
            </p>

            <ol className="list-decimal pl-5 space-y-1">
              <li>mampu naik dan turun tangga</li>
              <li>mampu menyebutkan 3-6 kata yang memiliki arti</li>
              <li>Bisa belajar untuk makan sendiri</li>
              <li>Mampu menjawab pertanyaan jika ditanya</li>
            </ol>
          </div>
          <br />
          <div>
            <div className="flex flex-coll  items-center ">
              <IoIosWarning className="text-yellow-300 text-3xl" />
              <h1 className="text-xl font-semibold ">SELALU DIINGAT</h1>
            </div>
            <p>
              Setiap anak unik dan dapat memiliki waktu berbeda dalam mencapai
              suatu milestone. Hindari membandingkan anak dengan anak lainnya
              dalam menentukan perkembangan anak tersebut. Jika anak belum
              mencapai milestone tersebut, anak sangat penting dibawa ke dokter
              karena harus dinilai dengan standar yang ada.
            </p>
          </div>
        </div>
      </>
    );
  } else if (id === 2) {
    teks = (
      <>
        <div className="flex-1 overflow-y-auto p-2 bg-amber-600 rounded-t-2xl text-white font-serif">
          <p>
            Stimulasi adalah rangsangan penting yang diberikan sejak dini untuk
            mendukung tumbuh kembang anak secara optimal. bagaimana cara
            menstimulasi tumbuh kembang anak usia 12-18 bulan? mari simak
            penjelasan di bawah ini!
          </p>
          <div>
            <p className="mb-1 font-bold">• MOTORIK KASAR</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">Berjalan mundur 5 langkah</li>
              <p>
                Berjalan mundur 5 langkah jika anak sudah bisa berjalan tanpa
                berpegangan, orang tua bisa lanjut mengajarkan anak untuk
                berjalan mundur sebanyak 5 langkah secara perlahan
              </p>
              <li className="font-bold">Menarik mainan sambil berjalan</li>
              <p>
                berikan anak mainan dengan tali untuk melatih anak menggenggam
                mainan sambil berjalan
              </p>
              <li className="font-bold">
                Membungkuk memungut mainan dan berdiri kembali
              </li>
              <p>
                letakan mainan di bawah atau barang yang bisa diambil, minta
                anak untuk mengambil barang tersebut tetap sambil bantu perlahan
                dari sikap menunduk dan berdiri kembali, bertujuan untuk
                meningkatkan keseimbangan anak
              </p>
              <li className="font-bold">Berjalan dan naik turun tangga</li>
              <p>
                Ajari anak untuk naik sambil berpegangan dengan anak tangga atau
                railing tangga, bantu dan awasi anak saat sedang berjalan naik
                turun tangga
              </p>
              <li className="font-bold">Berjalan sambil berjinjit</li>
              <p>
                fase berjalan anak sudah semakin menunjukan keseimbangan dalam
                berjalan dan memainkan kakinya dengan berjinjit, namun tetap
                awasi anak
              </p>
              <li className="font-bold">Menangkap dan melempar bola</li>
              <p>
                contohkan anak cara melempar dan menangkap bola, dimulai dari
                bola yang besar lalu ke bola yang makin kecil
              </p>
            </ol>
          </div>

          <br />
          <div>
            <p className="mb-1 font-bold">• MOTORIK HALUS</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">Permainan susun balok</li>
              <p>
                ajari anak untuk menumpuk balok keatas dengan bilang “jangan
                sampai jatuh, ya” hal ini dapat membantu konsentrasi anak
              </p>
              <li className="font-bold">memasukkan dan mengeluarkan benda</li>
              <p>
                ajarkan anak untuk memasukkan benda ke dalam wadah, misalnya
                dengan cara ajak anak untuk merapihkan mainannya setelah main
                dengan memasukkannya ke dalam wadah, tentunya dengan pengawasan
                orang tua. dengan langkah ini orang tua sekaligus dapat
                mengajarkan anak konsep tertata dan rapih.
              </p>
              <li className="font-bold">Memindahkan benda</li>
              <p>
                sediakan anak dengan benda atau mainan dengan berbagai bentuk
                dan warna, minta anak untuk mengelompokkan benda tersebut sesuai
                dengan warna atau bentuk yang sama. hal ini dapat meningkatkan
                pemahaman anak tentang berbagai macam bentuk dan macam warna
              </p>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">• BICARA DAN BAHASA</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">Membuat suara</li>
              <p>
                Anak sudah bisa membuat suara, orang tua bisa menstimulasi
                dengan membuat suara dengan mulut atau menggunakan benda yang
                ada di sekitar seperti pukul meja, mengetuk-ngetuk kaleng susu,
                dan lain sebagainya.
              </p>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">• SOSIAL DAN KEMANDIRIAN</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold"> Menirukan pekerjaan rumah tangga</li>
              <p>
                jika anak sudah bisa berjalan dan mengenggam barang anak
                cenderung akan menirukan pekerjaan rumah tangga yang dia
                perhatikan sehari hari, seperti mengelap barang
              </p>
              <li className="font-bold">Melepas pakaian</li>
              <p>
                ajarkan anak untuk melepas pakaian secara bertahap, seperti
                membuka celana, sepatu, sendal hingga melepaskan baju, ajarkan
                secara pelan-pelan
              </p>
              <li className="font-bold">Makan sendiri</li>
              <p>
                Ajari anak untuk makan sendiri, biarkan anak mengeksplor makanan
                yang dimakan dengan alat makan seperti sendok dan garpu ataupun
                dengan tangan, tetap pantau agar anak tidak tersedak
              </p>
              <li className="font-bold">Merawat mainan </li>
              <p>
                ajarkan anak untuk merawat mainan untuk menstimulasi anak cara
                menyayangi dan menghargai sesuatu seperti merawat boneka dan
                merapihkan mainan setelah dimainkan
              </p>
              <li className="font-bold">Mengunjungi tempat umum</li>
              <p>
                ajak anak untuk mengunjungi tempat umum yang bertujuan untuk
                anak mengenali lingkungan dan benda yang ada di sekitar anak.
              </p>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">• PERTUMBUHAN </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>berat badan: 240 gram per bula</li>
              <li>panjang badan: 1 cm per bulan</li>
              <li>Lingkar kepala: 0,25 cm per bulan</li>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">KAPAN BAWA ANAK KE DOKTER?</p>
            <p>
              bawa anak ke dokter anak jika terjadi hal-hal yang perlu
              diwaspadai atau <b>red flags</b>:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Motorik:</li>
              <ul className="list-disc">
                <li>
                  anak belum mencoba berdiri atau melangkah pada usia 18 bulan
                </li>
                <li>sulit mempertahankan keseimbangan atau sering jatuh</li>
                <li>
                  ada pola gerakan yang tidak biasa atau cenderung mengutamakan
                  pergerakan pada satu sisi saja
                </li>
              </ul>
              <li>Interaksi Sosial</li>
              <ul className="list-disc">
                <li>sulit membuat kontak mata atau menghindari kontak mata</li>
                <li>
                  malas berinteraksi, bermain dan jarang tersenyum lah ini mah
                  gwej
                </li>
              </ul>
              <li>Bicara dan bahasa</li>
              <ul className="list-disc">
                <li> jarang melambaikan tangan atau menunjuk</li>
              </ul>
              <li>Kognitif</li>
              <ul className="list-disc">
                <li>kehilangan keterampilan yang mereka miliki sebelumnya</li>
                <li>
                  kurang rasa ingin tahu atau tidak mengeksplor benda atau orang
                  di sekitarnya
                </li>
                <li>melakukan gerakan yang sama berulang-ulang</li>
              </ul>
              <li>Pertumbuhan</li>
              <p>
                pertumbuhan berat badan, panjang badan dan lingkar kepala yang
                kurang dari target minimal per bulan
              </p>
            </ol>
          </div>
        </div>
      </>
    );
  } else if (id === 3) {
    teks = (
      <>
        <div className="flex-1 overflow-y-auto p-2 bg-amber-600 rounded-t-2xl text-white font-serif">
          <p>
            Stimulasi adalah rangsangan penting yang diberikan sejak dini untuk
            mendukung tumbuh kembang anak secara optimal. bagaimana cara
            menstimulasi tumbuh kembang anak usia 18-24 bulan mari simak
            penjelasan di bawah ini!
          </p>
          <div>
            <p className="mb-1 font-bold">• MOTORIK KASAR</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">Tingkatkan kemampuan berjala</li>
              <p>
                ajak anak untuk mau berlari, berjalan dengan berjinjit, bermain
                di air, menendang, naik dan turun tangga, dan menangkap bola
                dari yang besar hingga kecil
              </p>
              <li className="font-bold"> berjalan tanpa terhuyung</li>
              <p>
                pada usia ini anak sudah bisa berjalan dengan semibang tanpa
                miring kanan dan kiri, dan jarang jatuh
              </p>
              <li className="font-bold">Melatih keseimbangan tubuh</li>
              <p>
                ajarkan anak berdiri dengan 1 kaki secara bergantian untuk
                melatih keseimbangan tubuh. dimulai dari mengangkat kaki 1
                sambil berpegangan dengan orang tua atau tembok sampai anak
                terbiasa berdiri dengan seimbang
              </p>
            </ol>
          </div>

          <br />
          <div>
            <p className="mb-1 font-bold">• MOTORIK HALUS</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">Mengenal berbagai ukuran dan bentuk</li>
              <p>
                pada usia ini anak sudah mengenal berbagai ukuran dan bentuk.
                orang tua bisa membuat lubang dengan kardus ke berbagai bentuk
                seperti kotak, segitiga, bulat dan sebagainya, tersedia juga
                mainan dengan bentuk tersebut
              </p>
              <li className="font-bold">Bermain puzzle </li>
              <p>kenalkan anak dengan puzzle dimulai dari 3-5 potong puzzle</p>
              <li className="font-bold">Menggambar bentuk</li>
              <p>
                berikan anak kertas dan pensil warna, lalu arahkan cara
                menggambar berbagai bentuk mulai dari bulat, garis lurus dan
                lain sebagainya. setelah itu orang tua bisa mengajarkan cara
                membuat wajah sederhana dimulai dari bentuk bulat yang sudah
                diajarkan sebelumnya
              </p>
              <li className="font-bold">Membuat bentuk dari lilin mainan</li>
              <p>
                berikan anak lilin mainan atau adonan kue untuk membuat berbagai
                bentuk dan membantu anak menemukan imajinasi dari yang sudah
                dibuat.
              </p>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">• BICARA DAN BAHASA</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">mengerjakan perintah sederhana</li>
              <p>
                anak dengan usia ini bisa mengerjakan perintah yang sederhana,
                dengan menstimulasi melalui kegiatan sehari-hari anak
                menggunakan kalimat yang sederhana. contoh: “tolong ambilkan
                bola” “letakkan mainannya” “rapihkan lagi mainannya, ya”
              </p>
              <li className="font-bold">Bercerita tentang apa yang dilihat</li>
              <p>
                Anak sudah mulai bisa mengekspresikan dan menyambungkan kata
                yang diingat menjadi kalimat yang sederhana. orang tua dapat
                memberi stimulasi melalui buku, tontonan video, atau percakapan
                sehari-hari dengan anak
              </p>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">• SOSIAL DAN KEMANDIRIAN</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">Bujuk dan tenangkan anak jika rewel</li>
              <p>
                oada usia ini anak sudah bisa lebh bisa mengekspresikan marah,
                sedih, dan teriak. berikan anak waktu dan tenangkan anak
                perlahan-lahan, hindari membentak anak
              </p>
              <li className="font-bold">Belajar melepas baju sendiri</li>
              <p>
                Stimulasi anak dengan mengajarkan kembali cara melepas baju
                sendiri lalu ajarkan cara mengenakan baju sendiri
              </p>
              <li className="font-bold">
                Belajar makan dengan alat sendok dan garpu
              </li>
              <p>
                stimulasi kemandirian anak menggunakan alat makan sendok dan
                garpu anak yang sisinya tumpul dan tidak mudah pecah
              </p>
              <li className="font-bold">
                Bermain dan berinteraksi dengan teman{" "}
              </li>
              <p>
                anak-anak mulai suka berinteraksi terutama dengan teman-teman
                yang sepantaran dan melakukan permainan grup seperti petak
                umpet, kejar-kejaran, dan membuat rumah-rumahan dengan kardus
                sederhana
              </p>
              <li className="font-bold">Perkenalan awal jenis kelamin </li>
              <p>
                ajarkan anak untuk membedakan jenis kelamin yaitu perempuan dan
                laki-laki, dimulai dari figur bapak adalah laki-laki dan ibu
                adalah perempuan
              </p>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">• PERTUMBUHAN </p>

            <ol className="list-decimal pl-5 space-y-1">
              <li>Berat badan: 240 gram per bulan</li>
              <li>Tinggi badan: 1 cm per bulan</li>
              <li>lingkar kepala: 0,25 cm per bulan</li>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">KAPAN BAWA ANAK KE DOKTER?</p>
            <p>
              bawa anak ke dokter anak jika terjadi hal-hal yang perlu
              diwaspadai atau <b>red flags</b>:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Motorik:</li>
              <ul className="list-disc">
                <li>jalan selalu jinjit, bukan sengaja jinjit</li>
                <li>sulit naik tangga saat usia 24 bulan</li>
                <li>sulit menggunakan sendok atau menumpukkan balok</li>
              </ul>
              <li>Interaksi sosial</li>
              <ul className="list-disc">
                <li>malas atau menghindari kontak mata</li>
                <li>tidak berminat main dengan teman sebaya</li>
                <li>sulit menggunakan sendok atau menumpukkan balok</li>
              </ul>
              <li>Bahasa</li>
              <ul className="list-disc">
                <li>
                  anak pada usia 24 bulan biasanya sudah bisa bicara lebih dari
                  50 kosakata, jika kurang anak masih bisa distimulasi dan
                  konsulkan ke dokter anak
                </li>
                <li>belum bisa bicara 2 kata</li>
                <li>sulit mengikuti perintah sederhana </li>
              </ul>
              <li>Kognitif </li>
              <ul className="list-disc">
                <li>
                  tidak mau bermain pretend play bermain peran seperti tidak mau
                  merawat boneka, tidak memberi makan boneka, ajak ke dokter
                  anak karena fungsi imajinasi kognitif anak kurang peka
                </li>
                <li>sulit mengelompokkan bentuk dan warna yang sama</li>
                <li>
                  kehilangan keterampilan yang sudah dikuasai sebelumnya,
                  misalnya anak lupa dengan bentuk dan huruf yang telah dikuasai
                </li>
              </ul>
              <li>Pertumbuhan</li>
              <p>jika pertumbuhan anak kurang dari target minimal per bulan</p>
            </ol>
          </div>
        </div>
      </>
    );
  } else if (id === 4) {
    teks = (
      <>
        <div className="flex-1 overflow-y-auto p-2 bg-amber-600 rounded-t-2xl text-white font-serif">
          <p>
            Stimulasi adalah rangsangan penting yang diberikan sejak dini untuk
            mendukung tumbuh kembang anak secara optimal. bagaimana cara
            menstimulasi tumbuh kembang anak usia 24-36 bulan mari simak
            penjelasan di bawah ini!
          </p>
          <div>
            <p className="mb-1 font-bold">• MOTORIK KASAR</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">Aktifitas fisik</li>
              <p>
                aktifitas fisik anak akan semakin banyak untuk bermain di luar,
                ajak anak untuk berjalan, bermain, melompat dan melatih
                keseimbangan
              </p>
              <li className="font-bold">Latihan menghadapi rintangan</li>
              <p>
                ajarkan anak menghadapi rintangan seperti merangkak di kolong
                meja, berjinjit mengeliling kursi, dan lain-lai
              </p>
              <li className="font-bold">
                Melompat jauh dengan kedua kaki secara bersamaan
              </li>
              <p>
                ajak anak bermain melompati garis dengan menandai pembatas garis
                dengan jarak tertentu untuk melompati garis tersebut
              </p>
              <li className="font-bold">Melempar dan menangkap</li>
              <p>
                pada usia ini anak sudah semakin mahir dengan permainan melempar
                dan menangkap, fasilitasi anak dengan bola seukuran genggaman
                tangan mereka untuk memudahkan mereka bermain lempar tangkap
              </p>
            </ol>
          </div>

          <br />
          <div>
            <p className="mb-1 font-bold">• MOTORIK HALUS</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold"> Mencoret-coret kertas</li>
              <p>
                anak sudah semakin mahir dalam mencoret-coret kertas,
                melanjutkan dari perkembangan sebelumnya perkenalkan anak dengan
                alat tulis baru seperti spidol, pensil warna, krayon dan
                lain-lain lalu ajak mereka berkreasi dengan mencoret-coret
                kertas tersebut
              </p>
              <li className="font-bold">Membuat gambar tempelan </li>
              <p>
                Dampingi dan perkenalkan anak dengan origami dan gunting yang
                tumpul untuk membuat bentuk sederhana dan menempelkan bentuk
                tersebut, orang tua dapat memberi pemahaman tentang bentuk yang
                sudah dibuat anak
              </p>
              <li className="font-bold">
                Memilih dan mengelompokkan benda menurut jenisnya
              </li>
              <p>
                berikan anak berbagai macam benda seperti koin, kancing
                warna-warni, atau barang lainnya lalu minta anak untuk
                mengelompokkan benda-benda tersebut berdasarkan jenisnya
              </p>
              <li className="font-bold">Mencocokan gambar dan benda</li>
              <p>
                berikan anak gambar-gambar yang ada di rumah, lalu ajak anak
                untuk mencocokan gambar dan barang yang sebenarnya
              </p>
              <li className="font-bold">Konsep jumlah</li>
              <p>
                ajarkan anak konsep jumlah dengan menggunakan barang seperti 1
                kancing, 2 kancing dan seterusnya
              </p>
              <li className="font-bold">Bermain atau menyusun balok</li>
              <p>
                pada usia ini anak sudah mampu untuk menyusun balok lebih tinggi
                dan lebih rumit
              </p>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">• BICARA DAN BAHASA</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">Bacakan buku cerita anak</li>
              <p>
                lebih sering ajak anak untuk mengobrol, hindari kata kata baby
                talk atau intonasi berbicara menyerupai anak kecil, ajarkan anak
                dengan kata sebenarnya. contoh: “mamam” jadi “makan” “cucu” jadi
                “susu”
              </p>
              <li className="font-bold">Ajak bicara</li>
              <p>
                membaca buku cerita anak bertujuan untuk membangun ikatan
                emosional dan menambah kosakata pada anak dan mulai konsep
                5W+1H. contoh “siapa tokohnya?” “apa yang terjadi?” “kapan
                kejadiannya?” dan seterusnya. bertujuan untuk mengembangkan
                keterampilan berpikir kritis anak
              </p>
              <li className="font-bold">Dengarkan cerita anak</li>
              <p>
                dengar cerita anak atau mendorong anak untuk cerita untuk
                meningkatkan tingkat ekspresif anak
              </p>
              <li className="font-bold">Menyebut nama lengkap anak </li>
              <p>
                ajarkan anak untuk mengenal diri sendiri dengan menyebut nama
                lengkap anak, suruh anak untuk menyebut namanya secara berulang
              </p>
              <li className="font-bold">bercerita tentang diri anak</li>
              <p>
                stimulasi anak bercerita tentang diri sendiri untuk meningkatkan
                daya ingat dan mengekspresikan dengan mengenal diri sendiri
              </p>
              <li className="font-bold">
                Melihat gambar dan menyebut dengan benar nama 2 benda atau lebih
              </li>
              <p>
                stimulasi daya ingat anak dengan menunjukan barang dan suruh
                anak untuk menebak nama dari barang tersebut
              </p>
              <li className="font-bold">menyatakan keadaan suatu benda</li>
              <p>
                stimulasi anak untuk mengenal benda dan tempat di sekitar rumah.
                contoh: “mainan kamu yang boneka itu ada di meja depan tv ya”
              </p>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">• SOSIAL DAN KEMANDIRIAN</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold"> Belajar makan sendiri</li>
              <p>
                pada usia ini anak sudah bisa makan sendiri tanpa banyak yang
                tumpah dan berikan pengertian tentang waktu makan, tetap awasi
                anak agar tidak tersedak
              </p>
              <li className="font-bold">
                Melepas pakaian sendiri dan berpakaian
              </li>
              <p>
                anak sudah bisa melepas pakaian secara mandiri dengan, ajarkan
                anak cara berpakaian dan memlih pakaian
              </p>
              <li className="font-bold">
                Melatih buang air kecil dan besar di toilet (Toilet training)
              </li>
              <p>
                Ajarkan anak toilet training dengan lepas pampers dan ajarkan
                pelan-pelan anak untuk kasih tau ke orang tua jika ada rasa
                ingin buang air, lalu ajarkan anak menggunakan toilet dan
                bagaimana cara membersihkan setelah buang air
              </p>
              <li className="font-bold"> Bujuk dan tenangkan anak </li>
              <p>
                bujuk dan tenangkan anak jika marah atau kecewa secara
                pelan-pelan dan biarkan anak bicara lalu caritau apa masalah
                yang membuat bersedih atau kecewa
              </p>
              <li className="font-bold">Menekankan konsep kebersihan</li>
              <p>
                ajarkan anak untuk melakukan konsep kebersihan seperti
                merapihkan mainan setelah bermain, mencuci tangan sebelum makan,
                dan lain-lain
              </p>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">• PERTUMBUHAN </p>
            <p>
              pada usia ini fokuskan anak untuk bertambah tinggi dengan tetap
              menjaga berat badan anak tetap naik{" "}
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li> Tinggi badan: 1 cm per bulan</li>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">KAPAN BAWA ANAK KE DOKTER?</p>
            <p>
              bawa anak ke dokter anak jika terjadi hal-hal yang perlu
              diwaspadai atau <b>red flags</b>:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Motorik:</li>
              <ul className="list-disc">
                <li>jalan jinjit terus menerus</li>
                <li>
                  sulit memegang sendok, garpu, pensil dan mengancingkan baju
                </li>
                <li>sering jatuh atau sulit menjaga keseimbangangn</li>
              </ul>
            </ol>
          </div>
        </div>
      </>
    );
  } else if (id === 5) {
    teks = (
      <>
        <div className="flex-1 overflow-y-auto p-2 bg-amber-600 rounded-t-2xl text-white font-serif">
          <p>
            Virus berada di sekitar kita, dia bisa berada di hewan, menempel
            dimainan, bisa berada di udara. Virus dapat mencari rumah atau inang
            untuk ditempati yaitu tubuh kita manusia.
          </p>
          <br />
          <p>
            Di dalam tubuh kita terdapat sel darah putih yang melindungi tubuh.
            Saat virus ada di dalam tubuh, sel darah putih akan menyerang virus
            dan tubuh kita akan mengalami demam, pilek, dan batuk.
          </p>
          <br />
          <p>
            Sel darah putih yang menyerang virus tersebut bisa lebih kuat dengan
            suntikan atau tetesan di mulut yang disebut imunisasi, agar kita
            bisa terhindar dari berbagai penyakit menular dan berbahaya.
          </p>
        </div>
      </>
    );
  } else if (id === 6) {
    teks = (
      <>
        <div className="flex-1 overflow-y-auto p-2 bg-amber-600 rounded-t-2xl text-white font-serif">
          <div>
            <ol className="list-decimal pl-5 space-y-1">
              <li className="font-bold">Imunisasi Hepatitis B</li>
              <p>
                Bertujuan untuk melindungi anak dari penyakit Hepatitis B. Total
                imunisasi ini 5 dosis, yang diberikan langsung pada usia:
              </p>
              <ul className="list-disc">
                <li>bayi baru lahir</li>
                <li>2 bulan</li>
                <li>3 bulan</li>
                <li>4 bulan</li>
                <li>18 bulan booster/lanjutan</li>
              </ul>
              <li className="font-bold"> Imunisasi BCG</li>
              <p>
                Untuk melindungi anak dari penyakit infeksi TB pada paru-paru.
                Imunisasi ini hanya memiliki 1 dosis yang diberikan di usia 1
                bulan
              </p>
              <li className="font-bold">Imunisasi Polio</li>
              <p>
                Untuk mencegah penyakit polio yang menyerang saraf dan
                menyebabkan kelumpuhan. Imunisasi Polio memiliki 4 dosis, yang
                diberikan pada usia:
              </p>
              <ul className="list-disc">
                <li>bayi baru lahir</li>
                <li>2 bulan</li>
                <li>3 bulan</li>
                <li>4 bulan</li>
                <li>18 bulan booster/lanjutan</li>
              </ul>

              <li className="font-bold">Imunisasi DTP</li>
              <p>
                Untuk melindungi anak dari penyakit difteri, tetanus, dan
                pertusis. Imunisasi ini memiliki 6 dosis, yang diberikan pada
                usia:
              </p>
              <ul className="list-disc">
                <li>bayi baru lahir</li>
                <li>2 bulan</li>
                <li>3 bulan</li>
                <li>4 bulan</li>
                <li>18 bulan booster/lanjutan</li>
                <li>5-7 tahun booster/lanjutan</li>
                <li>10-18 tahun booster/lanjutan</li>
              </ul>
              <li className="font-bold">Imunisasi MR</li>
              <p>
                Untuk mencegah penyakit campak dan rubella. Imunisasi MR primer
                diberikan pada usia 9 bulan
              </p>
              <li className="font-bold">Imunisasi HIB</li>
              <p>
                Untuk mencegah Haemophilus Influenza tipe B. imunisasi ini
                memiliki 4 dosis, yang dapat diberikan pada usia:
              </p>
              <ul className="list-disc">
                <li>2 bulan</li>
                <li>3 bulan</li>
                <li>4 bulan</li>
                <li>18 bulan booster/lanjutan</li>
              </ul>
              <li className="font-bold">Imunisasi PCV</li>
              <p>
                Untuk mencegah pnemonia. Imunisasi PCV memiliki 4 dosis, yang
                dapat diberikan pada usia:
              </p>
              <ul className="list-disc">
                <li>2 bulan</li>
                <li>4 bulan</li>
                <li>6 bulan</li>
                <li>12-15 bulan booster/lanjutan</li>
              </ul>

              <li className="font-bold">Imunisasi Rotavirus</li>
              <p>
                Untuk melindungi anak dari Diare. Imunisasi ini memiliki 3 dosis
                imunisasi dasar, yang dapat diberikan pada usia:
              </p>
              <ul className="list-disc">
                <li>2 bulan</li>
                <li>3 bulan</li>
                <li>4 bulan</li>
                <li>18 bulan booster/lanjutan</li>
              </ul>
              <li className="font-bold">Imunisasi JE</li>
              <p>
                Untuk mencegah penyakit radang otak. Imunisasi ini memiliki 2
                dosis, yang dapat diberikan pada usia:
              </p>
              <ul className="list-disc">
                <li>9 bulan</li>
                <li>2-3 tahun booster</li>
              </ul>
              <li className="font-bold"> Imunisasi Tifoid</li>
              <p>
                Untuk mencegah demam Tifoid. Imunisasi ini memiliki dosis dasar,
                yang dapat diberikan saat usia:
              </p>
              <ul className="list-disc">
                <li>2 tahun</li>
                <li>setiap 3 tahun rentang 5-18 tahun booster</li>
              </ul>
              <li className="font-bold">Imunisasi Dengue</li>
              <p>
                Untuk melindungi anak dari Demam Berdarah. Imunisasi ini terdiri
                dari 3 dosis, yang dapat diberikan saat usia: 9-16 tahun dengan
                jarak 6 bulan
              </p>
              <li className="font-bold"> Imunisasi HPV</li>
              <p>
                Untuk mencegah kanker serviks. Imunisasi ini terdiri dari 2
                dosis, yang dapat diberikan saat usia: 9-14 tahun
              </p>
              <li className="font-bold">Imunisasi Influenza</li>
              <p>
                Untuk mencegah flu. Imunisasi ini memiliki 1 dosis dasar dan
                booster, yang dapat diberikan saat usia:
              </p>
              <ul className="list-disc">
                <li>6 Bulan</li>
                <li>
                  setiap tahun ketika anak berusia 18 bulan-18 tahun booster
                </li>
              </ul>
              <li className="font-bold"> Imunisasi Varisela</li>
              <p>
                Untuk melindungi anak dari cacar air. Imunisasi ini terdiri dari
                2 dosis imunisasi dasar, yang dapat diberikan saat usia:
              </p>
              <ul className="list-disc">
                <li>
                  dosis 1-2 diberikan saat anak berusia 12-18 bulan, diberikan
                  dengan jarak 6 minggu sampai 3 bulan
                </li>
              </ul>
              <li className="font-bold"> Imunisasi Hepatitis A</li>
              <p>
                Bertujuan untuk mencegah penyakit kronis gangguan hati.
                Imunisasi Hepatitis A memiliki 2 dosis imunisasi dasar, yang
                dapat diberikan saat usia:
              </p>
              <ul className="list-disc">
                <li>
                  dosis 1 dan 2 diberikan saat anak berusia 12-24 bulan dengan
                  jarak 6 minggu sampai 36 bulan
                </li>
              </ul>
            </ol>
          </div>
        </div>
      </>
    );
  } else if (id === 7) {
    teks = (
      <>
        <div className="flex-1 overflow-y-auto p-2 bg-amber-600 rounded-t-2xl text-white font-serif">
          <p className="font-bold">Kenapa gizi seimbang itu penting?</p>
          <p>
            Karena Tubuh Balita sedang tumbuh cepat mulai dari tinggi badan,
            berat badan, otak, otot, dan tulang. Kalau gizinya kurang,
            pertumbuhan anak bisa terganggu anak jadi mudah sakit, kurang kuat,
            dan susah belajar. jika gizi anak seimbang anak jadi lebih sehat,
            aktif, ceria, dan bisa belajar banyak hal baru.
          </p>

          <div>
            <p className="mb-1 font-bold">
              Komponen gizi yang di butuhkan anak usia 1-3 tahun:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Karbohidrat</li>
              <p>sumber tenaga seperti nasi, roti, kentang, dan ubi</p>
              <li>Protein</li>
              <p>
                Untuk tumbuhnya otot, organ, dan memperbaiki bagian tubuh yang
                rusak seperti daging, ikan, telur, tahu, dan tempe.
              </p>
              <li>Lemak</li>
              <p>
                Penting untuk otak dan cadangan tenaga tapi lemak baik ada di
                bagian minyak sehat, ikan, atau kacang- kacangan.
              </p>
              <li>Vitamin</li>
              <p>
                untuk kekebalan tubuh, agar gigi dan tulang kuat, dan
                penglihatan seperti sayuran dan buah buahan.
              </p>
              <li>Air</li>
              <p>
                agar tubuh tidak dehidrasi dan semua proses dalam tubuh bisa
                berjalan lancar.
              </p>
            </ol>
          </div>

          <br />
          <div>
            <p className="mb-1 font-bold">
              Cara mudah memberi makanan yang bergizi pada anakS
            </p>
            <ol className="list-disc pl-5 space-y-1">
              <li className="font-bold">
                Sajikan makanan yang beragam supaya anak dapat banyak jenis zat
                gizi seperti karbohidrat, protein, vitamin, dan minera
              </li>

              <li className="font-bold">
                Usahakan makanan utama dan makanan selingan sehat (Snack) yang
                mengandung gizi.
              </li>

              <li className="font-bold">
                Perhatikan tekstur di usia ini anak mulai bisa makan makanan
                lebih kasar (tidak harus semua di haluskan) supaya anak latihan
                kunyah.
              </li>

              <li className="font-bold">
                Beri porsi kecil tapi sering jika anak belum bisa makan banyak
                sekali waktu.
              </li>

              <li className="font-bold">
                Pastikan makanan bersih di masak dengan cara sehat supaya zat
                gizi tidak banyak yang hilang.
              </li>

              <li className="font-bold">
                Batasi makanan terlalu manis, gurih (Asin), atau berlemak tinggi
                yang tidak sehat.
              </li>
            </ol>
          </div>
          <br />
          <div>
            <p className="mb-1 font-bold">Contoh menu sehari hari </p>
            <ol className="list-disc pl-5 space-y-1">
              <li>
                Sarapan: bubur nasi + sayur + telur atau tahu + potongan buah
              </li>

              <li>Snack pagi: pisang atau buah lainnya.</li>

              <li>
                Makan siang: nasi + lauk protein (ikan/ayam/tahu/tempe) + sayur
                + sedikit lemak sehat.
              </li>

              <li>Snack sore: yogurt/susu + buah.</li>

              <li>
                Makan malam: nasi + lauk protein(ikan/ayam/tahu/tempe) + sayur +
                sedikit lemak sehat (porsi bisa lebih kecil jika anak sudah
                kenyang).
              </li>
            </ol>
          </div>
        </div>
      </>
    );
  }

  useEffect(() => {
    if (open) {
      // Ketika modal dibuka
      document.body.style.overflow = "hidden";
    } else {
      // Ketika modal ditutup
      document.body.style.overflow = "auto";
    }

    // Cleanup saat komponen unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-60 px-4  ">
          <div className="bg-white rounded-lg w-full max-w-xl max-h-[90vh] overflow-hidden flex flex-col ">
            {/* Video */}
            <div className="w-full px-6 pt-6 pb-16 aspect-video">
              <iframe
                className="w-full h-full"
                src={link}
                title="YouTube video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; "
                allowFullScreen
              ></iframe>
              <h1 className="text-center font-bold ">{title}</h1>
            </div>

            {teks}

            {/* Tombol Close */}
            <div className="p-3 border-t flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
