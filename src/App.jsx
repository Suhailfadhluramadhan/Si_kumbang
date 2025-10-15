import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Komponent/Login";
import Register from "./Komponent/Register";
import First from "./Komponent/First";
import Home from "./Pages/home/Home";
import ProtectedRoute from "./Komponent/Protect";
import Beranda from "./Pages/home/Beranda";
import Profile from "./Pages/Profile/Profile";
import VideoList from "./Pages/home/VideoList";
import CardAnak from "./Pages/DataAnak/CardAnak";
import StimulasiPage from "./Pages/DataAnak/Stimulasi/Stimulasi";
import Perkembangan from "./Pages/DataAnak/PemantauanPerkembangan/Perkembangan";
import CatatanBayi from "./Pages/DataAnak/Catatan/CatatanBayi";
import Vaksinasi from "./Pages/DataAnak/Imunisasi/Vaksinasi";
import Grafik from "./Komponent/Grafik";
import ChildProviderWrapper from "./Komponent/Wraper";
import PrivacyPolicy from "./Komponent/Kebijakan";
import Notifications from "./Pages/home/Notifikasi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/VideoList" element={<VideoList />} />
          <Route path="/anak/:id" element={<CardAnak />} />
          <Route path="/profile/aturan" element={<PrivacyPolicy/>}/>
          <Route path="/notif" element={<Notifications/>}/>
          <Route  element={<ChildProviderWrapper />}>
            <Route path="/Stimulasi" element={<StimulasiPage />} />
            <Route path="/Perkembangan" element={<Perkembangan />} />
            <Route path="/catatan" element={<CatatanBayi />} />
            <Route path="/vaksin" element={<Vaksinasi />} />
            <Route path="/anak/:id/gizi" element={<Grafik />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
