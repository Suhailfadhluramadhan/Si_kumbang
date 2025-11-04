const whoDataBoys = {
  12: {
    sd3neg: 6.3,
    sd2neg: 7.0,
    sd1neg: 7.9,
    median: 8.9,
    sd1: 10.1,
    sd2: 11.5,
    sd3: 13.1,
  },
  13: {
    sd3neg: 6.4,
    sd2neg: 7.2,
    sd1neg: 8.1,
    median: 9.2,
    sd1: 10.4,
    sd2: 11.8,
    sd3: 13.5,
  },
  14: {
    sd3neg: 6.6,
    sd2neg: 7.4,
    sd1neg: 8.3,
    median: 9.4,
    sd1: 10.6,
    sd2: 12.1,
    sd3: 13.8,
  },
  15: {
    sd3neg: 6.7,
    sd2neg: 7.6,
    sd1neg: 8.5,
    median: 9.6,
    sd1: 10.9,
    sd2: 12.4,
    sd3: 14.1,
  },
  16: {
    sd3neg: 6.9,
    sd2neg: 7.7,
    sd1neg: 8.7,
    median: 9.8,
    sd1: 11.1,
    sd2: 12.6,
    sd3: 14.5,
  },
  17: {
    sd3neg: 7.0,
    sd2neg: 7.9,
    sd1neg: 8.9,
    median: 10.0,
    sd1: 11.4,
    sd2: 12.9,
    sd3: 14.8,
  },
  18: {
    sd3neg: 7.2,
    sd2neg: 8.1,
    sd1neg: 9.1,
    median: 10.2,
    sd1: 11.6,
    sd2: 13.2,
    sd3: 15.1,
  },
  19: {
    sd3neg: 7.3,
    sd2neg: 8.2,
    sd1neg: 9.2,
    median: 10.4,
    sd1: 11.8,
    sd2: 13.5,
    sd3: 15.4,
  },
  20: {
    sd3neg: 7.5,
    sd2neg: 8.4,
    sd1neg: 9.4,
    median: 10.6,
    sd1: 12.1,
    sd2: 13.7,
    sd3: 15.7,
  },
  21: {
    sd3neg: 7.6,
    sd2neg: 8.6,
    sd1neg: 9.6,
    median: 10.9,
    sd1: 12.3,
    sd2: 14.0,
    sd3: 16.0,
  },
  22: {
    sd3neg: 7.8,
    sd2neg: 8.7,
    sd1neg: 9.8,
    median: 11.1,
    sd1: 12.5,
    sd2: 14.3,
    sd3: 16.4,
  },
  23: {
    sd3neg: 7.9,
    sd2neg: 8.9,
    sd1neg: 10.0,
    median: 11.3,
    sd1: 12.8,
    sd2: 14.6,
    sd3: 16.7,
  },
  24: {
    sd3neg: 8.1,
    sd2neg: 9.0,
    sd1neg: 10.2,
    median: 11.5,
    sd1: 13.0,
    sd2: 14.8,
    sd3: 17.0,
  },
  25: {
    sd3neg: 8.2,
    sd2neg: 9.2,
    sd1neg: 10.3,
    median: 11.7,
    sd1: 13.3,
    sd2: 15.1,
    sd3: 17.3,
  },
  26: {
    sd3neg: 8.4,
    sd2neg: 9.4,
    sd1neg: 10.5,
    median: 11.9,
    sd1: 13.5,
    sd2: 15.4,
    sd3: 17.7,
  },
  27: {
    sd3neg: 8.5,
    sd2neg: 9.5,
    sd1neg: 10.7,
    median: 12.1,
    sd1: 13.7,
    sd2: 15.7,
    sd3: 18.0,
  },
  28: {
    sd3neg: 8.6,
    sd2neg: 9.7,
    sd1neg: 10.9,
    median: 12.3,
    sd1: 14.0,
    sd2: 16.0,
    sd3: 18.3,
  },
  29: {
    sd3neg: 8.8,
    sd2neg: 9.8,
    sd1neg: 11.1,
    median: 12.5,
    sd1: 14.2,
    sd2: 16.2,
    sd3: 18.7,
  },
  30: {
    sd3neg: 8.9,
    sd2neg: 10.0,
    sd1neg: 11.2,
    median: 12.7,
    sd1: 14.4,
    sd2: 16.5,
    sd3: 19.0,
  },
  31: {
    sd3neg: 9.0,
    sd2neg: 10.1,
    sd1neg: 11.4,
    median: 12.9,
    sd1: 14.7,
    sd2: 16.8,
    sd3: 19.3,
  },
  32: {
    sd3neg: 9.1,
    sd2neg: 10.3,
    sd1neg: 11.6,
    median: 13.1,
    sd1: 14.9,
    sd2: 17.1,
    sd3: 19.6,
  },
  33: {
    sd3neg: 9.3,
    sd2neg: 10.2,
    sd1neg: 11.7,
    median: 13.3,
    sd1: 15.1,
    sd2: 17.3,
    sd3: 20.0,
  },
  34: {
    sd3neg: 9.4,
    sd2neg: 10.5,
    sd1neg: 11.9,
    median: 13.5,
    sd1: 15.4,
    sd2: 17.6,
    sd3: 20.3,
  },
  35: {
    sd3neg: 9.5,
    sd2neg: 10.7,
    sd1neg: 12.0,
    median: 13.7,
    sd1: 15.6,
    sd2: 17.9,
    sd3: 20.6,
  },
  36: {
    sd3neg: 9.6,
    sd2neg: 10.8,
    sd1neg: 12.2,
    median: 13.9,
    sd1: 5.8,
    sd2: 18.1,
    sd3: 20.9,
  },
};

export const calculateAgeInMonths = (birthDate) => {
  const birth = new Date(birthDate);
  const today = new Date();
  const months =
    (today.getFullYear() - birth.getFullYear()) * 12 +
    (today.getMonth() - birth.getMonth());

  return months;
};

//   console.log(calculateAgeInMonths())
// Fungsi untuk menghitung status gizi
export const calculateNutritionStatus = (weight, ageInMonths) => {
  if (ageInMonths < 12 || ageInMonths > 36) {
    return {
      status: "Di luar rentang",
      color: "gray",
      description: "Data hanya tersedia untuk usia 12-36 bulan",
    };
  }

  const data = whoDataBoys[ageInMonths];

  if (!data) {
    return { status: "Data tidak tersedia", color: "gray", description: "" };
  }

  let atsRounded = weight - data.median;
  let ats = Math.round(atsRounded);

  let zscore;
  if (weight < data.median) {
    if (weight <= data.sd3neg) {
      zscore = -3;
    } else if (weight <= data.sd2neg) {
      zscore = -2 + (weight - data.sd2neg) / (data.sd2neg - data.sd3neg);
    } else if (weight <= data.sd1neg) {
      zscore = -1 + (weight - data.sd1neg) / (data.sd1neg - data.sd2neg);
    } else {
      zscore = -1 + (weight - data.sd1neg) / (data.median - data.sd1neg);
    }
  } else if (weight > data.median) {
    if (weight <= data.sd1) {
      zscore = 1 - (data.sd1 - weight) / (data.sd1 - data.median);
    } else if (weight <= data.sd2) {
      zscore = 2 - (data.sd2 - weight) / (data.sd2 - data.sd1);
    } else if (weight <= data.sd3) {
      zscore = 3 - (data.sd3 - weight) / (data.sd3 - data.sd2);
    } else {
      zscore = 3;
    }
  } else {
    zscore = 0;
  }

  let status, color, description;
  if (zscore <= -3) {
    status = "Gizi Buruk";
    color = "#DC2626";
    description = "Berat badan sangat kurang (< -3 SD)";
  } else if (zscore >= -3 && zscore < -2) {
    status = "Gizi Kurang";
    color = "#F97316";
    description = "Berat badan kurang (-3 SD sampai < -2 SD)";
  } else if (zscore >= -2 && zscore <= 2) {
    status = "Gizi Baik";
    color = "#22C55E";
    description = "Berat badan normal (-2 SD sampai +2 SD)";
  } else if (zscore > 2) {
    status = "Gizi Lebih";
    color = "#EAB308";
    description = "Berat badan berlebih (> +2 SD)";
  }

  return { status, color, description, data };
};
