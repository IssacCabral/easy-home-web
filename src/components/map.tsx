import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const QUIXADA_COORDS = {
  latitude: -4.97084,
  longitude: -39.015,
} as const;

export function Map() {
  const mapRef = useRef(null);

  return (
    <MapContainer
      center={[QUIXADA_COORDS.latitude, QUIXADA_COORDS.longitude]}
      zoom={15}
      ref={mapRef} // aqui a referência ao mapa é salva em mapRef
      className="h-80 w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
