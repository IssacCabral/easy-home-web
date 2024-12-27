import { api } from "@/lib/axios";
import { IShareRequestEntity } from "@/shared/share-request";

interface FinishShareRequestRequest {
  id: string;
  reason: string;
}

export async function finishShareRequest(request: FinishShareRequestRequest) {
  const result = await api.patch<IShareRequestEntity>(`/share-requests/finish/${request.id}`, {
    finalizationReason: request.reason,
  });
  return result.data;
}
