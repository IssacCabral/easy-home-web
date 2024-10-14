import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { INITIAL_COORDS } from "@/utils/initial-coords";

interface MapProps {
  coords: {
    lat: number;
    lon: number;
  };
}

const INITIAL_ZOOM = 15;
const TARGET_ZOOM = 17;

function UpdateMapCenter({ coords }: MapProps) {
  const map = useMap();

  useEffect(() => {
    map.setView([coords.lat, coords.lon], TARGET_ZOOM);
  }, [coords, map]);

  return null;
}

export function Map({ coords }: MapProps) {
  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={INITIAL_ZOOM}
      className="h-80 w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.lat, coords.lon]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      {coords.lat !== INITIAL_COORDS.lat && <UpdateMapCenter coords={coords} />}
    </MapContainer>
  );
}
