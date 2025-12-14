export const CONVERSIONS = {
  // --- CORE PHYSICAL CONVERSIONS (From previous response) ---
  length: { 
    label: "Length ",
    baseUnit: "m",
    units: {
      m: { label: "Meter", factor: 1 },
      km: { label: "Kilometer", factor: 0.001 },
      cm: { label: "Centimeter", factor: 100 },
      mi: { label: "Mile", factor: 0.000621371 },
      ft: { label: "Foot", factor: 3.28084 },
      in: { label: "Inch", factor: 39.3701 },
    },
  },
  weight: {
    label: "Weight / Mass",
    baseUnit: "kg",
    units: {
      kg: { label: "Kilogram", factor: 1 },
      g: { label: "Gram", factor: 1000 },
      mg: { label: "Milligram", factor: 1000000 },
      lb: { label: "Pound", factor: 2.20462 },
      oz: { label: "Ounce", factor: 35.274 },
      t: { label: "Tonne (Metric)", factor: 0.001 },
    },
  },
  volume: {
    label: "Volume",
    baseUnit: "L",
    units: {
      L: { label: "Liter", factor: 1 },
      mL: { label: "Milliliter", factor: 1000 },
      m3: { label: "Cubic Meter", factor: 0.001 },
      gal: { label: "Gallon (US liquid)", factor: 0.264172 },
      qt: { label: "Quart (US liquid)", factor: 1.05669 },
    },
  },
  time: {
    label: "Time",
    baseUnit: "s",
    units: {
      s: { label: "Second", factor: 1 },
      min: { label: "Minute", factor: 1 / 60 },
      h: { label: "Hour", factor: 1 / 3600 },
      d: { label: "Day", factor: 1 / 86400 },
      ms: { label: "Millisecond", factor: 1000 },
    },
  },
  area: {
    label: "Area",
    baseUnit: "m2",
    units: {
      m2: { label: "Square Meter", factor: 1 },
      km2: { label: "Square Kilometer", factor: 1000000 }, 
      cm2: { label: "Square Centimeter", factor: 0.0001 }, 
      ha: { label: "Hectare", factor: 10000 },             
      ac: { label: "Acre", factor: 4046.86 },              
      ft2: { label: "Square Foot", factor: 0.092903 },     
    },
  },
  pressure: {
    label: "Pressure",
    baseUnit: "Pa",
    units: {
      Pa: { label: "Pascal", factor: 1 },
      kPa: { label: "Kilopascal", factor: 0.001 },
      bar: { label: "Bar", factor: 0.00001 },
      atm: { label: "Atmosphere", factor: 9.86923e-6 },
      psi: { label: "Pounds per square inch", factor: 0.000145038 },
    },
  },
  digitalStorage: {
    label: "Digital Storage",
    baseUnit: "B",
    units: {
      B: { label: "Byte", factor: 1 },
      KB: { label: "Kilobyte (1024 B)", factor: 1 / 1024 },
      MB: { label: "Megabyte (1024 KB)", factor: 1 / 1048576 },
      GB: { label: "Gigabyte (1024 MB)", factor: 1 / 1073741824 },
      TB: { label: "Terabyte (1024 GB)", factor: 1 / 1099511627776 },
      bit: { label: "Bit", factor: 8 },
    },
  },

  // --- NEW: ENERGY ---
  energy: {
    label: "Energy",
    baseUnit: "J", // Base unit is Joule
    units: {
      J: { label: "Joule", factor: 1 },
      kJ: { label: "Kilojoule", factor: 0.001 },
      cal: { label: "Calorie (Small)", factor: 0.239006 }, // to J (Thermochemical)
      Cal: { label: "Calorie (Food/Large)", factor: 0.000239006 }, // to J
      kWh: { label: "Kilowatt Hour", factor: 2.77778e-7 }, // to J
      BTU: { label: "British Thermal Unit", factor: 0.000947817 }, // to J
      eV: { label: "Electronvolt", factor: 6.2415e18 }, // to J
    },
  },

  // --- NEW: POWER (Rate of Energy Transfer) ---
  power: {
    label: "Power",
    baseUnit: "W", // Base unit is Watt (Joule/Second)
    units: {
      W: { label: "Watt", factor: 1 },
      kW: { label: "Kilowatt", factor: 0.001 },
      MW: { label: "Megawatt", factor: 0.000001 },
      hp: { label: "Horsepower (Metric)", factor: 0.00135962 }, // to W
      ftlb_s: { label: "Foot-pound/second", factor: 0.737562 }, // to W
    },
  },

  // --- NEW: SPEED / VELOCITY ---
  speed: {
    label: "Speed / Velocity",
    baseUnit: "m_s", // Base unit is Meter per second
    units: {
      m_s: { label: "Meter/Second", factor: 1 },
      km_h: { label: "Kilometer/Hour", factor: 3.6 }, // to m/s
      mi_h: { label: "Mile/Hour", factor: 2.23694 }, // to m/s
      ft_s: { label: "Foot/Second", factor: 3.28084 }, // to m/s
      knot: { label: "Knot (nautical)", factor: 1.94384 }, // to m/s
      c: { label: "Speed of Light (approx)", factor: 3.33564e-9 }, // to m/s
    },
  },

  // --- NEW: DATA RATE / BANDWIDTH ---
  dataRate: {
    label: "Data Rate / Bandwidth",
    baseUnit: "bit_s", // Base unit is Bit per second
    units: {
      bit_s: { label: "Bit/Second", factor: 1 },
      kbit_s: { label: "Kilobit/Second", factor: 0.001 },
      Mbit_s: { label: "Megabit/Second", factor: 0.000001 },
      Gbit_s: { label: "Gigabit/Second", factor: 0.000000001 },
      B_s: { label: "Byte/Second", factor: 0.125 }, // 1 B/s = 8 bit/s
      kB_s: { label: "Kilobyte/Second", factor: 0.000125 },
      MB_s: { label: "Megabyte/Second", factor: 0.000000125 },
    },
  },

  // --- NEW: FORCE ---
  force: {
    label: "Force",
    baseUnit: "N", // Base unit is Newton
    units: {
      N: { label: "Newton", factor: 1 },
      kN: { label: "Kilonewton", factor: 0.001 },
      dyne: { label: "Dyne", factor: 100000 }, // to N
      lbf: { label: "Pound-force", factor: 0.224809 }, // to N
      kgf: { label: "Kilogram-force (kp)", factor: 0.101972 }, // to N
    },
  },
}