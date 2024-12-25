import { api } from "@/lib/axios";
import { IContactRequestEntity } from "@/shared/contact-request";

interface RentPropertyRequest {
  contactRequestId: string;
}

export async function rentProperty(request: RentPropertyRequest): Promise<IContactRequestEntity> {
  const result = await api.post<IContactRequestEntity>("/contact-requests/rent", request);
  return result.data;
}
