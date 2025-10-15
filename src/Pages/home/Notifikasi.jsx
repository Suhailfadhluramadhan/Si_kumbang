import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

function NotificationModal({ onClose }) {
  const [notifications, setNotifications] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  function formatToWIB(date) {
    const jakartaTime = new Date(
      date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
    );
    return jakartaTime.toLocaleString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit", // bisa kamu hapus kalau nggak mau detik
      hour12: false,
    });
  }

  useEffect(() => {
    const q = query(
      collection(db, "notifications"),
      orderBy("createdAt", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const now = new Date(); // lokal time
      const nowUTC = new Date(now.getTime() - now.getTimezoneOffset() * 60000); // konversi ke UTC

      const docs = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((notif) => notif.createdAt?.toDate() <= nowUTC);

      setNotifications(docs);
    });

    return () => unsubscribe();
  }, []);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-white overflow-y-auto shadow-lg">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Notifikasi</h2>
        <button onClick={onClose}>×</button>
      </div>
      <div className="p-4">
        {notifications.length > 0 ? (
          notifications.map((notif, index) => (
            <div
              key={notif.id}
              onClick={() => toggleOpen(index)}
              className="border rounded-md p-3 mb-2 cursor-pointer transition hover:bg-gray-50"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-black">{notif.title}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notif.createdAt?.toDate().toLocaleString()}
                  </p>
                </div>
                <div className="ml-2 mt-1">
                  {openIndex === index ? "▲" : "▼"}
                </div>
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-700 mt-3 border-t pt-2">
                  {notif.content}
                </p>
              )}
            </div>
          ))
        ) : (
          <p>Tidak ada notifikasi untuk saat ini.</p>
        )}
      </div>
    </div>
  );
}

export default NotificationModal;
