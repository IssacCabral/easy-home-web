import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function Map() {
  const mapRef = useRef(null);
  const latitude = -4.97084;
  const longitude = -39.015;

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      ref={mapRef}
      className="h-80 w-full rounded-xl bg-zinc-100"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
}
