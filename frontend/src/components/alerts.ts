// src/alerts.ts

export type Alert = {
  id: number;
  type: "Flood" | "Earthquake" | "Fire" | "Cyclone" | "Terrorist Attack";
  message: string;
  severity: "low" | "medium" | "high";
  timestamp: string;
};

// ✅ Function to get current timestamp
export const getCurrentTimestamp = (): string => {
  const now = new Date();
  return now.toLocaleString(); // Example: "9/15/2025, 11:45 AM"
};

// Alerts by districts with dynamic timestamp
export const districtAlerts: Record<string, Alert[]> = {
  Lucknow: [
    {
      id: 1,
      type: "Flood",
      message: "River Gomti water level rising, stay alert.",
      severity: "high",
      timestamp: getCurrentTimestamp(),
    },
    {
      id: 2,
      type: "Fire",
      message: "Small fire incident near Hazratganj, under control.",
      severity: "low",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Kanpur: [
    {
      id: 1,
      type: "Earthquake",
      message: "Mild tremors felt, no major damage reported.",
      severity: "medium",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Delhi: [
    {
      id: 1,
      type: "Terrorist Attack",
      message: "Security alert at Connaught Place, stay indoors.",
      severity: "high",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Mumbai: [
    {
      id: 1,
      type: "Cyclone",
      message: "Cyclone warning issued for coastal areas.",
      severity: "high",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Bangalore: [
    {
      id: 1,
      type: "Fire",
      message: "Factory fire reported in Peenya, fire services on spot.",
      severity: "medium",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Chennai: [
    {
      id: 1,
      type: "Flood",
      message: "Heavy rains causing waterlogging in multiple areas.",
      severity: "high",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Kolkata: [
    {
      id: 1,
      type: "Cyclone",
      message: "Strong winds expected, stay indoors after 6 PM.",
      severity: "medium",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Hyderabad: [
    {
      id: 1,
      type: "Earthquake",
      message: "Minor tremors reported, no damage.",
      severity: "low",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Jaipur: [
    {
      id: 1,
      type: "Terrorist Attack",
      message: "Suspicious activity reported near Amer Fort, under probe.",
      severity: "medium",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Pune: [
    {
      id: 1,
      type: "Fire",
      message: "Apartment fire in Kothrud, rescue operations ongoing.",
      severity: "high",
      timestamp: getCurrentTimestamp(),
    },
  ],
  Ahmedabad: [
    {
      id: 1,
      type: "Flood",
      message: "Sabarmati river water release, low-lying areas on alert.",
      severity: "medium",
      timestamp: getCurrentTimestamp(),
    },
  ],
};
