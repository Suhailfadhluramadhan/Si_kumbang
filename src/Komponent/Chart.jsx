import React, { useState, useRef } from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Scatter,
  ComposedChart,
} from "recharts";

export default function Chart({ childWeight, childAge, status }) {
  // const [zScore, setZScore] = useState(-0.5);
  const [windowStart, setWindowStart] = useState(12);
  const [windowEnd, setWindowEnd] = useState(36);
  const FULL_DATA_MAX = 36;
  const STEP = 2;
  const WINDOW_SIZE = windowEnd - windowStart;

  const touchStartX = useRef(null);

  const generateFullData = () => {
    const data = [];
    for (let month = 0; month <= FULL_DATA_MAX; month++) {
      const dataPoint = {
        age: month,
        zMinus3: 2 + month * 0.25 + month * month * 0.008,
        zMinus2: 2.5 + month * 0.28 + month * month * 0.009,
        zMinus1: 2.8 + month * 0.32 + month * month * 0.01,
        z0: 3.3 + month * 0.35 + month * month * 0.011,
        zPlus1: 3.8 + month * 0.38 + month * month * 0.012,
        zPlus2: 4.3 + month * 0.42 + month * month * 0.013,
        zPlus3: 4.8 + month * 0.46 + month * month * 0.014,
      };
      if (month === childAge) {
        dataPoint.childWeight = childWeight;
      }
      data.push(dataPoint);
    }
    return data;
  };

  console.log(status);
  let data;
  let saran;
  if (status === "Gizi Baik") {
    data = (
      <>
        <h1> Gizi baik / normal (Z-score antara -2 SD sampai 2 SD)</h1>
        <p>
          Anak memiliki status gizi baik, dengan berat badan sesuai usianya. Ini
          menunjukkan pertumbuhan dan perkembangan yang optimal.
        </p>
      </>
    );
    saran = (
      <>
        <ul className="text-sm list-disc text-gray-700 space-y-1">
          <li>Pertahankan pola makan bergizi seimbang</li>
          <li>Dukung anak tetap aktif</li>
          <li>Pantau pertumbuhan secara rutin</li>
        </ul>
      </>
    );
  } else if (status === "Gizi Kurang") {
    data = (
      <>
        <h1> Gizi kurang (Z-score antara -3 SD sampai &lt; -2 SD)</h1>
        <p>
          Anak memiliki status gizi kurang, dengan berat badan sedikit di bawah
          standar usianya. Saran: Tingkatkan asupan gizi terutama protein
          hewani, berikan makanan bergizi lebih sering dalam porsi kecil, dan
          konsultasikan ke tenaga kesehatan bila berat badan tidak naik dalam
          1–2 bulan.
        </p>
      </>
    );
    saran = (
      <>
        <ul className="text-sm list-disc text-gray-700 space-y-1">
          <li>
            <p>Tingkatkan asupan gizi terutama protein hewani</p>
          </li>
          <li>
            <p>Berikan makanan bergizi lebih sering dalam porsi kecil</p>
          </li>
          <li>
            <p>
              Konsultasikan ke tenaga kesehatan bila berat badan tidak
              naik dalam 1–2 bulan
            </p>
          </li>
        </ul>
      </>
    );
  } else if (status === "Gizi Lebih") {
    data = (
      <>
        <h1> Gizi lebih (Z-score &lt 2 SD sampai 3 SD)</h1>
        <p>
          Anak memiliki status gizi lebih, dengan berat badan sedikit di atas
          standar usianya.
        </p>
      </>
    );

    saran = (
      <>
        <ul className="text-sm list-disc text-gray-700 space-y-1">
          <li>
            <p>Atur porsi makan sesuai kebutuhan usia</p>
          </li>
          <li>
            <p>Kurangi makanan tinggi gula, garam, dan lemak</p>
          </li>
          <li>
            <p>Dorong anak aktif bergerak setiap hari</p>
          </li>
        </ul>
      </>
    );
  }

  const fullData = generateFullData();

  const dataToDisplay = fullData.filter(
    (d) => d.age >= windowStart && d.age <= windowEnd
  );

  const shiftWindow = (direction) => {
    // direction: -1 untuk ke kiri, +1 untuk ke kanan
    let newStart = windowStart + direction * STEP;
    let newEnd = windowEnd + direction * STEP;

    if (newStart < 0) {
      newStart = 0;
      newEnd = WINDOW_SIZE;
    }

    if (newEnd > FULL_DATA_MAX) {
      newEnd = FULL_DATA_MAX;
      newStart = FULL_DATA_MAX - WINDOW_SIZE;
    }

    setWindowStart(newStart);
    setWindowEnd(newEnd);
  };

  // Handle Touch
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX.current;

    if (Math.abs(diff) > 30) {
      shiftWindow(diff > 0 ? -1 : 1); // kiri atau kanan
      touchStartX.current = null;
    }
  };

  // Handle Mouse (Desktop)
  const isDragging = useRef(false);
  const lastMouseX = useRef(null);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastMouseX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - lastMouseX.current;

    if (Math.abs(diff) > 30) {
      shiftWindow(diff > 0 ? -1 : 1);
      lastMouseX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="text-sm font-semibold">{`Usia: ${payload[0].payload.age} bulan`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs" style={{ color: entry.color }}>
              {entry.name === "childWeight"
                ? `Berat: ${entry.value.toFixed(1)} kg (Z-Score: ${zScore})`
                : `${entry.name}: ${entry.value.toFixed(1)} kg`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full  bg-gradient-to-br from-blue-50 to-indigo-100 ">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-6">
        <div
          style={{ width: "100%", height: 400 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={dataToDisplay}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />

              <XAxis
                dataKey="age"
                tick={{ fontSize: 12 }}
                domain={[windowStart, windowEnd]}
                type="number"
                allowDataOverflow
              />
              <YAxis
                domain={[0, 40]}
                label={{
                  value: "Berat Badan (kg)",
                  angle: -90,
                  position: "insideLeft",
                }}
                tick={{ fontSize: 12 }}
                ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40]}
              />

              <Tooltip content={<CustomTooltip />} />

              <Legend
                verticalAlign="bottom"
                align="center"
                layout="horizontal"
                iconSize={12}
              />

              <Line
                type="monotone"
                dataKey="zMinus3"
                stroke="rgba(220, 38, 38, 0.8)"
                strokeWidth={2}
                dot={false}
                name="-3 SD"
              />
              <Line
                type="monotone"
                dataKey="zMinus2"
                stroke="rgba(249, 115, 22, 0.8)"
                strokeWidth={2}
                dot={false}
                name="-2 SD"
              />
              <Line
                type="monotone"
                dataKey="zMinus1"
                stroke="rgba(234, 179, 8, 0.8)"
                strokeWidth={2}
                dot={false}
                name="-1 SD"
              />
              <Line
                type="monotone"
                dataKey="z0"
                stroke="rgba(34, 197, 94, 0.8)"
                strokeWidth={3}
                dot={false}
                name="Median (0 SD)"
              />
              <Line
                type="monotone"
                dataKey="zPlus1"
                stroke="rgba(234, 179, 8, 0.8)"
                strokeWidth={2}
                dot={false}
                name="+1 SD"
              />
              <Line
                type="monotone"
                dataKey="zPlus2"
                stroke="rgba(249, 115, 22, 0.8)"
                strokeWidth={2}
                dot={false}
                name="+2 SD"
              />
              <Line
                type="monotone"
                dataKey="zPlus3"
                stroke="rgba(220, 38, 38, 0.8)"
                strokeWidth={2}
                dot={false}
                name="+3 SD"
              />

              <Scatter
                dataKey="childWeight"
                fill="rgba(37, 99, 235, 1)"
                shape="circle"
                name="Pengukuran Anak"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h1 className="font-semibold text-xl text-gray-800 mb-2">
            Interpretasi
          </h1>
          {data}
          <br />

          <h1 className="font-semibold text-xl text-gray-800 mb-2">
            Langkah yang Disarankan :
          </h1>
          {saran}
        </div>
      </div>
    </div>
  );
}
