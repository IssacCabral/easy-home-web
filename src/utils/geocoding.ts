import axios from "axios";

export const fetchCoordinatesFromAddress = async (
  location: string,
): Promise<{
  lat: number;
  lon: number;
}> => {
  const encodedAddress = encodeURIComponent(location);
  const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&addressdetails=1&extratags=1&polygon_geojson=1`;

  const result = await axios.get(url);
  const data = result.data[0];

  return { lat: Number(data.lat), lon: Number(data.lon) };
};
