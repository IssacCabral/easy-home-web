import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  coords: {
    lat: number;
    lon: number;
  };
}

// Componente para atualizar o centro do mapa
function ChangeMapView({ coords }: MapProps) {
  const map = useMap();

  useEffect(() => {
    map.setView([coords.lat, coords.lon], 16);
  }, [coords, map]);

  return null;
}

export function Map({ coords }: MapProps) {
  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={15}
      className="h-80 w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeMapView coords={coords} />
    </MapContainer>
  );
}
