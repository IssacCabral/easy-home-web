import { api } from "@/lib/axios";
import { IContactRequestEntity } from "@/shared/contact-request";

interface CloseContactRequestRequest {
  id: string;
  reason?: string;
}

export async function closeContactRequest(request: CloseContactRequestRequest) {
  const result = await api.post<IContactRequestEntity>("/contact-requests/close", request);
  return result.data;
}
