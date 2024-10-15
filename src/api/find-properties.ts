
import { api } from "@/lib/axios";
import { PaginationData, PaginationParams } from "@/shared/pagination";
import { IPropertyEntity, PropertyStatus, PropertyTypes } from "@/shared/property";

type FindPropertiesRequest = {
  centralLat: number;
	centralLon: number;
	radiusInMeters: number
	maxPrice?: number;
	minBedrooms?: number;
	maxBedrooms?: number;
	status?: PropertyStatus;
	type?: PropertyTypes;
	amenities?: string[];
} & PaginationParams

type FindPropertiesResponse = PaginationData<IPropertyEntity>

function setFindPropertiesPayload(request: FindPropertiesRequest) {
  return {
    page: request.page,
    limit: 10,
    centralLat: request.centralLat,
    centralLon: request.centralLon,
    radiusInMeters: request.radiusInMeters,
    minPrice: 100,
    maxPrice: request.maxPrice,
    minBedrooms: request.minBedrooms,
    maxBedrooms: request.maxBedrooms,
    status: request.status,
    type: request.type,
    amenities: request.amenities
  }
}

export async function findProperties(request: FindPropertiesRequest): Promise<FindPropertiesResponse> {
  const response = await api.get<FindPropertiesResponse>("/properties", {
    params: setFindPropertiesPayload(request)
  })
  
  return response.data
}