import { api } from "@/lib/axios";
import { PaginationData, PaginationParams } from "@/shared/pagination";
import { IPropertyEntity, PropertyStatus } from "@/shared/property";

type FindLandlordPropertiesRequest = {
  landlordId: string;
  title?: string;
  tenantName?: string;
  status?: PropertyStatus;
} & PaginationParams;

type FindLandlordPropertiesResponse = PaginationData<IPropertyEntity>;

export const perPageLimit = 10;

function setPayload(request: FindLandlordPropertiesRequest) {
  return {
    page: request.page,
    limit: perPageLimit,
    title: request.title,
    tenantName: request.tenantName,
    status: request.status,
  };
}

export async function findLandlordProperties(
  request: FindLandlordPropertiesRequest,
): Promise<FindLandlordPropertiesResponse> {
  const response = await api.get<FindLandlordPropertiesResponse>(`/properties/landlord/${request.landlordId}`, {
    params: setPayload(request),
  });

  return response.data;
}
