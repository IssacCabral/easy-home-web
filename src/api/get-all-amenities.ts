import { api } from "@/lib/axios";

export interface Amenity {
  id: string;
  label: string;
}

type GetAllAmenitiesResponse = Amenity[];

export async function getAllAmenities(): Promise<GetAllAmenitiesResponse> {
  const response = await api.get<GetAllAmenitiesResponse>("/amenities");
  return response.data;
}
