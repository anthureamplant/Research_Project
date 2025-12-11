export const SENSORS = [
  {
    name: "DHT22 / SHT3x",
    parameter: "Temperature And Humidity",
    purpose: "Monitor microclimate conditions.",
    notes: ["Place at canopy height", "Calibrate regularly"],
    cost: "Low",
  },
  {
    name: "BH1750",
    parameter: "Light",
    purpose: "Measure photoperiod and light stress.",
    notes: ["Keep above plants", "Avoid direct sunlight"],
    cost: "Low",
  },
  {
    name: "Capacitive Soil Moisture",
    parameter: "Soil moisture",
    purpose: "Irrigation control, avoid overwatering.",
    notes: ["Use capacitive sensors", "Multiple sampling"],
    cost: "Low",
  },
  {
    name: "EC And pH probe",
    parameter: "Electrical Conductivity / pH",
    purpose: "Track nutrient concentration and acidity for NPK management.",
    notes: ["Regular calibration", "Rinse probes after use"],
    cost: "Medium"
  },
  {
    name: "Camera (Raspberry Pi Camera / USB)",
    parameter: "RGB images",
    purpose: "Capture plant appearance for phenotyping and flower detection.",
    notes: ["Consistent lighting", "Fixed mounting for time-series"],
    cost: "Low - Medium"
  },
  {
    name: "Weight / Load cell",
    parameter: "Tray weight",
    purpose: "Estimate water uptake and pot-level drainage events.",
    notes: ["Sensitive to vibration"],
    cost: "Medium"
  }
];
