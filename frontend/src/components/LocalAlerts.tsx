import { useEffect, useState } from "react";
import { districtAlerts, Alert, getCurrentTimestamp } from "./alerts";

function LocalAlerts() {
  const [userDistrict, setUserDistrict] = useState("");
  const [alertsList, setAlertsList] = useState<Alert[]>([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser && storedUser.district) {
      setUserDistrict(storedUser.district);

      // Get alerts for user's district
      const filtered = districtAlerts[storedUser.district] || [];
      setAlertsList(filtered);
    }

    // ✅ Optional: update timestamps every minute
    const interval = setInterval(() => {
      setAlertsList((prev) =>
        prev.map((alert) => ({ ...alert, timestamp: getCurrentTimestamp() }))
      );
    }, 60000); // update every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type: string) => {
    switch (type) {
      case "Flood":
        return "bg-blue-100 border-blue-500 text-blue-800";
      case "Fire":
        return "bg-red-100 border-red-500 text-red-800";
      case "Earthquake":
        return "bg-orange-100 border-orange-500 text-orange-800";
      case "Terrorist Attack":
        return "bg-gray-200 border-gray-700 text-gray-900";
      case "Cyclone":
        return "bg-purple-100 border-purple-500 text-purple-800";
      default:
        return "bg-green-100 border-green-500 text-green-800";
    }
  };

  return (
    <div className="flex justify-center bg-blue-100 min-h-screen p-8">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Local Alerts for {userDistrict || "your region"}
        </h2>

        {alertsList.length > 0 ? (
          <div className="space-y-4">
            {alertsList.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 border-l-4 rounded-lg shadow ${getAlertColor(
                  alert.type
                )}`}
              >
                <h3 className="text-lg font-semibold">{alert.type}</h3>
                <p className="text-sm">{alert.message}</p>
                <p className="text-xs text-gray-500 mt-1">{alert.timestamp}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No alerts found for your district.
          </p>
        )}
      </div>
    </div>
  );
}

export default LocalAlerts;
