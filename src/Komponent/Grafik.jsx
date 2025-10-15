// Grafik.jsx
import React from "react";
import Chart from "./Chart";
import { useContext } from "react";
import { Childd } from "../Pages/DataAnak/AnakConteks";
import {
  calculateAgeInMonths,
  calculateNutritionStatus,
} from "../utils/nutritionCalculator";

const Grafik = ({ zScore = 1, status, description }) => {
  const chil = useContext(Childd);

  if (!chil) {
    return "";
  }

  const weight = chil.weight;
  const age = chil ? calculateAgeInMonths(chil.birthDate) : null;
  const nutrisi = chil ? calculateNutritionStatus(weight, age) : null;
  console.log(nutrisi);

  // Tentukan warna status berdasarkan zScore
  const getStatusColor = () => {
    if (zScore < -2) return "text-red-600";
    if (zScore > 2) return "text-orange-600";
    return "text-green-600";
  };

  const getStatusBgColor = () => {
    if (zScore < -2) return "bg-red-50 border-red-200";
    if (zScore > 2) return "bg-orange-50 border-orange-200";
    return "bg-green-50 border-green-200";
  };




  return (
    <div className="w-fit h-full p-6 bg-white rounded-lg shadow-lg">
      {/* Info Box */}
      <div className={`mb-4 p-4 rounded-lg border ${getStatusBgColor()}`}>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Anak</h3>
        <div className="grid grid-cols-3 gap-4 text-sm mb-3">
          <div>
            <span className="text-gray-600">Usia:</span>
            <span className="ml-2 font-semibold text-gray-800">
              {age} bulan
            </span>
          </div>
          <div>
            <span className="text-gray-600">Berat:</span>
            <span className="ml-2 font-semibold text-gray-800">
              {weight} kg
            </span>
          </div>
        </div>

        {/* Status Gizi */}
        {status && (
          <div className="pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Status Gizi:</span>
              <span className={`font-bold text-base ${getStatusColor()}`}>
                {status}
              </span>
            </div>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
        )}
      </div>

      {/* Chart Component */}
      {weight && age && zScore !== undefined && (
        <Chart childWeight={weight} childAge={age} status={nutrisi.status} />
      )}

    
    </div>
  );
};

export default Grafik;
