import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { INITIAL_COORDS } from "@/utils/initial-coords";
import { PropertyStatus } from "@/shared/property";
import L from "leaflet";
import GreenIconImg from "@/assets/icons/green-icon.png";
import RedIconImg from "@/assets/icons/red-icon.png";
import OrangeIconImg from "@/assets/icons/orange-icon.png";

interface MapProps {
  coords: {
    lat: number;
    lon: number;
  };
  foundProperties: {
    lat: number;
    lon: number;
    status: PropertyStatus;
    title: string;
  }[];
  foundStreet: string;
}

const INITIAL_ZOOM = 15;
const TARGET_ZOOM = 16;

const freeIcon = L.icon({
  iconUrl: GreenIconImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const busyIcon = L.icon({
  iconUrl: RedIconImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const splitIcon = L.icon({
  iconUrl: OrangeIconImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function UpdateMapCenter({ coords }: MapProps) {
  const map = useMap();

  useEffect(() => {
    map.setView([coords.lat, coords.lon], TARGET_ZOOM);
  }, [coords, map]);

  return null;
}

export function Map({ coords, foundProperties, foundStreet }: MapProps) {
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
        <Popup>{foundStreet || "Quixadá, CE"}</Popup>
      </Marker>

      {foundProperties.map((property, index) => {
        // Select icon based on the property status
        let icon;
        if (property.status === PropertyStatus.FREE) {
          icon = freeIcon;
        } else if (property.status === PropertyStatus.BUSY) {
          icon = busyIcon;
        } else if (property.status === PropertyStatus.SPLIT) {
          icon = splitIcon;
        }

        return (
          <Marker
            key={index}
            position={[property.lat, property.lon]}
            icon={icon}
          >
            <Popup>{property.title}</Popup>
          </Marker>
        );
      })}

      {coords.lat !== INITIAL_COORDS.lat && (
        <UpdateMapCenter
          coords={coords}
          foundProperties={foundProperties}
          foundStreet={foundStreet}
        />
      )}
    </MapContainer>
  );
}
