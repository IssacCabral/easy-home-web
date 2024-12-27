import { api } from "@/lib/axios";
import { IShareRequestEntity } from "@/shared/share-request";

interface CreateShareRequestRequest {
  tenantId: string;
  propertyId: string;
}

export async function createShareRequest(request: CreateShareRequestRequest) {
  const result = await api.post<IShareRequestEntity>("/share-requests", request);
  return result.data;
}
