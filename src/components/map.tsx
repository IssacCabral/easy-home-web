import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { INITIAL_COORDS } from "@/utils/initial-coords";
import { PropertyStatus } from "@/shared/property";
import L from "leaflet";
import GreenIconImg from "@/assets/icons/green-icon.png";
import RedIconImg from "@/assets/icons/red-icon.png";
import OrangeIconImg from "@/assets/icons/orange-icon.png";
import { PropertyCard } from "./property-card";
import House2Img from "@/assets/landing-houses/house-2.png";

interface MapProps {
  coords: {
    lat: number;
    lon: number;
  };
  foundProperties: {
    id: string;
    lat: number;
    lon: number;
    status: PropertyStatus;
    title: string;
    street: string;
    addressNumber: number;
    price: number;
  }[];
  foundStreet: string;
  foo?: boolean; // todo: alterar
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

export function Map({ coords, foundProperties, foundStreet, foo }: MapProps) {
  const classes = `${foo ? "h-56" : "h-80"} w-full rounded-xl`;

  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={INITIAL_ZOOM}
      className={classes}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.lat, coords.lon]}>
        <Popup>{foundStreet || "Quixadá, CE"}</Popup>
      </Marker>

      {foundProperties.map((property) => {
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
            key={property.id}
            position={[property.lat, property.lon]}
            icon={icon}
          >
            <Popup className="custom-popup">
              <PropertyCard
                id={property.id}
                title={property.title}
                street={property.street}
                addressNumber={property.addressNumber}
                price={property.price}
                image={House2Img}
                isPopup
              />
            </Popup>
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
