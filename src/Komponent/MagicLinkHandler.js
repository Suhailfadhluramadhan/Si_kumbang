// pages/MagicLinkHandler.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { confirmMagicLink } from "../Services/auth";

function MagicLinkHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleConfirm = async () => {
      try {
        await confirmMagicLink(window.location.href);
        navigate("/home"); // langsung ke home
      } catch (err) {
        console.error(err);
        alert("Link tidak valid atau sudah kadaluarsa.");
        navigate("/login");
      }
    };

    handleConfirm();
  }, [navigate]);

  return <p>Memproses login, tunggu sebentar...</p>;
}

export default MagicLinkHandler;
