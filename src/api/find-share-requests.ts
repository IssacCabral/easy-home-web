import { api } from "@/lib/axios";
import { IShareRequestEntity } from "@/shared/share-request";

export async function findShareRequests(propertyId: string): Promise<IShareRequestEntity[]> {
  const response = await api.get<IShareRequestEntity[]>(`/share-requests/${propertyId}`);
  return response.data;
}
