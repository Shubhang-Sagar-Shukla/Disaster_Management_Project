import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Hospital, Shield, Flame, LifeBuoy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix default marker icon issue in Leaflet
const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Type-safe contact type
type ContactType = {
  category: string;
  icon: typeof Hospital;
  color: string;
  list: { name: string; phone: string; position?: [number, number] }[];
};

const EmergencyContacts = () => {
  const navigate = useNavigate();

  const contacts: ContactType[] = [
    {
      category: "Hospitals",
      icon: Hospital,
      color: "text-red-600",
      list: [
        {
          name: "City Hospital",
          phone: "+911234567890",
          position: [26.8467, 80.9462],
        },
        {
          name: "Metro Medical Center",
          phone: "+919876543210",
          position: [26.8485, 80.9491],
        },
      ],
    },
    {
      category: "Police",
      icon: Shield,
      color: "text-blue-600",
      list: [
        {
          name: "Local Police Station",
          phone: "100",
          position: [26.8527, 80.9465],
        },
        { name: "Women Helpline", phone: "1091", position: [26.851, 80.947] },
      ],
    },
    {
      category: "Fire & Rescue",
      icon: Flame,
      color: "text-orange-600",
      list: [
        {
          name: "Fire Control Room",
          phone: "101",
          position: [26.8423, 80.9501],
        },
        {
          name: "Disaster Rescue Force",
          phone: "+911122233344",
          position: [26.845, 80.948],
        },
      ],
    },
    {
      category: "NGOs & Relief",
      icon: LifeBuoy,
      color: "text-green-600",
      list: [
        { name: "Red Cross", phone: "+9118001801104" },
        { name: "Relief Foundation", phone: "+919111223344" },
      ],
    },
  ];

  // Flatten contacts with positions for map markers
  const mapMarkers = contacts
    .flatMap((c) => c.list)
    .filter((c) => c.position) as {
    name: string;
    phone: string;
    position: [number, number];
  }[];

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        Emergency Contacts
      </h2>

      {/* Offline Availability Banner */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg">
        <p className="text-sm text-yellow-800 font-medium">
          ✅ These numbers are stored locally and available even without
          internet.
        </p>
      </div>

      {/* Map Section */}
      <Card className="mb-8 shadow-md">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-3">
            Nearby Emergency Services
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Find hospitals, police stations, and fire services around you.
          </p>

          <MapContainer
            center={[26.8467, 80.9462]}
            zoom={13}
            style={{ height: "300px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapMarkers.map((c, i) => (
              <Marker key={i} position={c.position}>
                <Popup>
                  <strong>{c.name}</strong> <br />
                  📞 {c.phone} <br />
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${c.position[0]},${c.position[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Navigate
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </CardContent>
      </Card>

      {/* Contact Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((section, idx) => (
          <Card key={idx} className="shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <section.icon className={`h-6 w-6 ${section.color}`} />
                <h3 className="text-xl font-semibold">{section.category}</h3>
              </div>
              <ul className="space-y-4">
                {section.list.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{c.name}</p>
                      <p className="text-sm text-gray-600">{c.phone}</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={`tel:${c.phone}`}>
                        <Button
                          size="sm"
                          variant="emergency"
                          className="flex items-center gap-1"
                        >
                          <Phone className="h-4 w-4" /> Call
                        </Button>
                      </a>
                      {c.position && (
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${c.position[0]},${c.position[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <MapPin className="h-4 w-4" /> Locate
                          </Button>
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;
