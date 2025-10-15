import { useState, useEffect } from "react";
import { getName, editProfile } from "../../Services/database";
import { useAuth } from "../../Services/useAuth";
import { useNavigate } from "react-router-dom";

function Card({ setOpenn }) {
  const [data, setData] = useState();
  const { user, loading } = useAuth();

  const navigate= useNavigate()

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    // e.preventDefault();
    editProfile(user.uid, data);
    setOpenn(false);
    navigate("/beranda")
  }

  useEffect(() => {
    const getprofile = async () => {
      const profile = await getName(user.uid);
      setData(profile);
    };
    if (!loading && user?.uid) {
      getprofile();
    }
  }, [loading]);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50">
      <div className="bg-gray-200 rounded-lg w-[90%] max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
        {data && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => setOpenn(false)}
                className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-[#cc5f29] text-white rounded hover:bg-[#b84e20]"
              >
                Simpan
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Card;
