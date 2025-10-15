import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

export const EditChildModal = ({ child, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    height: "",
    birthDate: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  // Hitung tanggal minimal (3 tahun yang lalu dari hari ini)
  const getMinDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 3);
    return today.toISOString().split("T")[0];
  };

  // Hitung tanggal maksimal (1 tahun yang lalu dari hari ini)
  const getMaxDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 1);
    return today.toISOString().split("T")[0];
  };

  useEffect(() => {
    if (child) {
      setFormData({
        name: child.name || "",
        weight: child.weight || "",
        height: child.height || "",
        birthDate: child.birthDate || "",
      });
    }
  }, [child]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSaving(true);

    try {
      if (!formData.name.trim()) {
        toast.error("Nama tidak boleh kosong");
        setIsSaving(false);
        return;
      }

      const weight = parseFloat(formData.weight);
      const height = parseFloat(formData.height);

      if (isNaN(weight) || weight <= 0) {
        toast.error("Berat badan harus diisi dengan angka yang valid");
        setIsSaving(false);
        return;
      }

      if (isNaN(height) || height <= 0) {
        toast.error("Tinggi badan harus diisi dengan angka yang valid");
        setIsSaving(false);
        return;
      }

      if (!formData.birthDate) {
        toast.error("Tanggal lahir harus diisi");
        setIsSaving(false);
        return;
      }

      // Validasi usia (harus antara 1-3 tahun atau 12-36 bulan)
      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      const ageInMonths =
        (today.getFullYear() - birthDate.getFullYear()) * 12 +
        (today.getMonth() - birthDate.getMonth());

      if (ageInMonths < 12) {
        toast.error("Usia anak minimal 1 tahun (12 bulan)");
        setIsSaving(false);
        return;
      }

      if (ageInMonths > 36) {
        toast.error("Usia anak maksimal 3 tahun (36 bulan)");
        setIsSaving(false);
        return;
      }

      const dataToSave = {
        name: formData.name.trim(),
        weight: parseFloat(formData.weight),
        height: parseFloat(formData.height),
        birthDate: formData.birthDate,
      };

      await onSave(dataToSave);
    } catch (error) {
      console.error("Error saving:", error);
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MdEdit className="text-blue-600 text-xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Edit Data Anak</h2>
          </div>
          <button
            onClick={onClose}
            disabled={isSaving}
            className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-30"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nama Anak <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSaving}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors disabled:bg-gray-100"
              placeholder="Masukkan nama anak"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Berat Badan (kg) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              disabled={isSaving}
              step="0.1"
              min="0"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors disabled:bg-gray-100"
              placeholder="Contoh: 12.5"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tinggi Badan (cm) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              disabled={isSaving}
              step="0.1"
              min="0"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors disabled:bg-gray-100"
              placeholder="Contoh: 85.5"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tanggal Lahir <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              disabled={isSaving}
              min={getMinDate()}
              max={getMaxDate()}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors disabled:bg-gray-100"
            />
            <p className="text-xs text-gray-500 mt-1">
              Usia anak harus antara 1-3 tahun (12-36 bulan)
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              disabled={isSaving}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              Batal
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSaving}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
