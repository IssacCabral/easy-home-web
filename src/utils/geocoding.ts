import axios from "axios";

export const fetchCoordinatesFromAddress = async (
  location: string,
): Promise<{
  lat: number;
  lon: number;
  street: string;
  randomPoint: { lat: number; lon: number };
}> => {
  const encodedAddress = encodeURIComponent(location);
  const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&addressdetails=1&extratags=1&polygon_geojson=1`;

  const result = await axios.get(url);
  const data = result.data[0];

  // Gerar ponto aleatório dentro do bounding box
  const [south, north, west, east] = data.boundingbox.map(Number);

  const randomLat = south + Math.random() * (north - south);
  const randomLon = west + Math.random() * (east - west);

  return {
    lat: Number(data.lat),
    lon: Number(data.lon),
    street: `${data.address.road}, ${data.address.suburb}`,
    randomPoint: { lat: randomLat, lon: randomLon },
  };
};
