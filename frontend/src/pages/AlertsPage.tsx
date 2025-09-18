import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
    CircleMarker,
} from "react-leaflet";
import L from "leaflet";
import type { LatLngExpression } from "leaflet";

// --- Types
export type AlertType = "earthquake" | "flood" | "tsunami" | "other";

export interface AlertItem {
    id: string;
    title: string;
    description?: string;
    lat: number;
    lng: number;
    severity: number; // 1..5
    type: AlertType;
    timestamp: string; // ISO
}

// --- Helper: small icons using DivIcon with inline SVG
function makeIcon(color: string, emoji = "") {
    const html = `\
    <div style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:${color};box-shadow:0 2px 6px rgba(0,0,0,.25);font-size:18px;color:white">${emoji}</div>`;
    return L.divIcon({
        html,
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
    });
}

const ICONS = {
    earthquake: makeIcon("#e53e3e", "⚡"),
    flood: makeIcon("#3182ce", "🌊"),
    tsunami: makeIcon("#dd6b20", "🌊"),
    other: makeIcon("#718096", "❓"),
};

// --- Smooth fly/zoom hook for focusing
function MapFlyTo({
    position,
    zoom,
}: {
    position: LatLngExpression | null;
    zoom?: number;
}) {
    const map = useMap();
    useEffect(() => {
        if (!position) return;
        map.flyTo(position, zoom ?? map.getZoom(), { animate: true, duration: 1.0 });
    }, [position, zoom, map]);
    return null;
}

// --- Main component
export default function RegionAlertMap() {
    const [alerts, setAlerts] = useState<AlertItem[]>([]);
    const [selected, setSelected] = useState<string | null>(null);
    const [focusedPos, setFocusedPos] = useState<LatLngExpression | null>(null);
    const popupRefs = useRef<Record<string, L.Popup | null>>({});

    const defaultCenter: LatLngExpression = [31.1471, 75.3412]; // Punjab center
    const mapZoomDefault = 6;

    useEffect(() => {
        fetchAlerts().then((data) => setAlerts(data));
    }, []);

    useEffect(() => {
        if (!selected) return;
        const a = alerts.find((x) => x.id === selected);
        if (!a) return;
        setFocusedPos([a.lat, a.lng]);
    }, [selected, alerts]);

    const grouped = useMemo(() => {
        const mapType = new Map<string, AlertItem[]>();
        for (const a of alerts) {
            mapType.set(a.type, (mapType.get(a.type) ?? []).concat(a));
        }
        return mapType;
    }, [alerts]);

    return (
        <div className="w-full flex flex-col md:flex-row gap-6 bg-pink-50 min-h-screen p-4">
            {/* Left Section */}
            <div className="w-[65vw] bg-white rounded-xl shadow p-5">
                {/* Heading + Controls */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Live map — monitoring for hazards near you
                        </h2>
                        <p className="text-gray-600 text-sm mt-1">
                            Monitoring alerts around Punjab — map centered on your registered
                            region.
                        </p>
                    </div>
                    <div className="flex gap-2 mt-3 md:mt-0">
                        <span className="px-3 py-1 rounded bg-red-100 text-red-700 border border-red-300 text-sm font-semibold">
                            Region: Punjab
                        </span>

                        <button
                            className="px-3 py-1 rounded bg-slate-100 border text-sm"
                            onClick={() => window.location.reload()}
                        >
                            Refresh
                        </button>
                        <button
                            className="px-3 py-1 rounded bg-sky-500 text-white text-sm"
                            onClick={() => setFocusedPos(defaultCenter)}
                        >
                            Locate Me
                        </button>
                    </div>
                </div>

                {/* Map */}
                <div style={{ height: "520px" }} className="rounded overflow-hidden">
                    <MapContainer
                        center={defaultCenter}
                        zoom={mapZoomDefault}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            attribution="&copy; OpenStreetMap contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <MapFlyTo position={focusedPos} zoom={8} />

                        {alerts.map((a) => (
                            <Marker
                                key={a.id}
                                position={[a.lat, a.lng]}
                                icon={(ICONS as any)[a.type] ?? ICONS.other}
                                eventHandlers={{ click: () => setSelected(a.id) }}
                            >
                                <Popup>
                                    <div className="max-w-xs">
                                        <h4 className="font-semibold">{a.title}</h4>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {a.description}
                                        </p>
                                        <div className="mt-2 flex gap-2">
                                            <button className="px-3 py-1 rounded border">
                                                Learn More
                                            </button>
                                            <button className="px-3 py-1 rounded bg-red-600 text-white">
                                                Emergency Help
                                            </button>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}

                        {selected &&
                            (() => {
                                const s = alerts.find((x) => x.id === selected);
                                if (!s) return null;
                                return (
                                    <CircleMarker
                                        center={[s.lat, s.lng]}
                                        radius={40}
                                        pathOptions={{ color: "#f56565", weight: 2, opacity: 0.2 }}
                                    />
                                );
                            })()}
                    </MapContainer>
                </div>
            </div>

            {/* Right Section (Alert Feed) */}
            <aside className="w-full md:w-[30vw] p-2">
                <div className="bg-white p-4 rounded-xl shadow space-y-3">
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-bold">Alert Feed</h4>
                        <span className="text-xs text-gray-500">{alerts.length} active</span>
                    </div>
                    <p className="text-xs text-gray-500 -mt-2">
                        Nearby events & notifications
                    </p>

                    <div className="flex flex-col gap-2">
                        {alerts.map((a) => (
                            <div
                                key={a.id}
                                className={`p-3 rounded-xl border shadow-sm flex flex-col gap-2 cursor-pointer transition 
  hover:bg-[#fbeaea] hover:shadow-md ${selected === a.id ? "ring-2 ring-orange-400 bg-[#fceaea]" : "bg-white"
                                    }`}
                            >

                                <div className="flex justify-between items-center">
                                    <span
                                        className={`text-xs font-semibold px-2 py-1 rounded text-white shadow ${a.type === "earthquake"
                                                ? "bg-red-500"
                                                : a.type === "flood"
                                                    ? "bg-blue-500"
                                                    : "bg-gray-400"
                                            }`}
                                    >
                                        {a.type.toUpperCase()}
                                    </span>

                                    <button
                                        className="text-sm px-3 py-2 bg-red-500 text-white rounded-lg"
                                        onClick={() => setFocusedPos([a.lat, a.lng])}
                                    >
                                        Focus
                                    </button>

                                </div>
                                <div>
                                    <div className="font-medium">{a.title}</div>
                                    <div className="text-xs text-gray-500">
                                        Punjab • {new Date(a.timestamp).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
}

// --- Mock data
async function fetchAlerts(): Promise<AlertItem[]> {
    await new Promise((r) => setTimeout(r, 250));
    return [
        {
            id: "a1",
            title: "Minor tremor detected near Jalandhar.",
            description: "Low magnitude earthquake, no casualties reported.",
            lat: 31.326,
            lng: 75.5762,
            severity: 2,
            type: "earthquake",
            timestamp: new Date().toISOString(),
        },
        {
            id: "a2",
            title: "Flooding reported near Amritsar.",
            description: "Urban flooding due to heavy rainfall.",
            lat: 31.634,
            lng: 74.8723,
            severity: 3,
            type: "flood",
            timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
        },
    ];
}


