import React from "react";
import { useAuth } from "../../Services/useAuth";
import VideoCard from "../home/VideoCard";
import { useEffect, useState } from "react";
import { getName } from "../../Services/database";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const videos = [
  {
    title: "MENGENAL TUMBUH KEMBANG ANAK",
    thumbnail: "MengenalTbhKbng.jpg",
    link: "https://www.youtube.com/embed/QOFmMgpES3I",
    id: 1,
  },
  {
    title: "STIMULASI TUMBUH KEMBANG ANAK USIA 1 TAHUN",
    thumbnail: "StimulasiTbhKmbg.jpg",
    link: "https://www.youtube.com/embed/QOFmMgpES3I",
    id: 2,
  },
  {
    title: "STIMULASI TUMBUH KEMBANG ANAK USIA 2 TAHUN",
    thumbnail: "StimulasiTbhKbng2.jpg",
    link: "https://www.youtube.com/embed/45R9Hlrpx3A",
    id: 3,
  },
  {
    title: "STIMULASI TUMBUH KEMBANG ANAK USIA 3 TAHUN",
    thumbnail: "StimulasiTbhKbng3th.jpg",
    link: "https://www.youtube.com/embed/bKfNRqc_df4",
    id: 4,
  },
  {
    title: "Aku berani imunisasi",
    thumbnail: "Imunisasi.jpg",
    link: "https://youtube.com/embed/DKkFQPPOIQM",
    id: 5,
  },
  {
    title: "JENIS - JENIS VAKSIN UNTUK BAYI DAN ANAK",
    thumbnail: "JenisVaksin.jpg",
    link: "https://www.youtube.com/embed/mdMsXznNldQ?si=wIqIC0Cr4KcqsBcy",
    id: 6,
  },
  {
    title: "Gizi seimbang pada bayi",
    thumbnail: "EdukasiGizi.jpg",
    link: "https://www.youtube.com/embed/J_-rP48MBgc",
    id: 7,
  },
];

const VideoList = () => {
  const [name, setName] = useState();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchname = async () => {
      const name = await getName(user.uid);
      setName(name.name);
    };

    if (!loading && user?.uid) {
      fetchname();
    }
  }, [loading, user]);

  return (
    <div className="max-w-md mx-auto  ">
      {/* Header */}
      <div className="flex items-center justify-between bg-amber-700 p-4 ">
        <img src="3.png" alt="Logo" className="w-30 h-auto object-contain" />
        <div className="flex items-center space-x-7">
          <div className="flex items-center   space-x-2">
            <span className="text-white text-sm font-bold">{name}</span>
            <div className="w-10 h-10 rounded-full bg-white border-2 border-white overflow-hidden">
              <img src="img.png" alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-2">
        <h2 className="mt-4 text-lg font-bold">Video 📹</h2>
        <hr />
      </div>

      <div className="mt-4 px-4 grid grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            thumbnail={video.thumbnail}
            link={video.link}
            text={video.teks}
            id={video.id}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
