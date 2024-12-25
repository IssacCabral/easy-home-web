import { api } from "@/lib/axios";
import { IContactRequestEntity } from "@/shared/contact-request";

interface CreateContactRequestRequest {
  tenantId: string;
  propertyId: string;
}

type ContactRequestWithoutPasswordInTenant = Pick<
  IContactRequestEntity,
  "id" | "property" | "requestDate" | "status"
> & {
  tenant: Omit<IContactRequestEntity["tenant"], "password">;
};

export async function createContactRequest(request: CreateContactRequestRequest) {
  const result = await api.post<ContactRequestWithoutPasswordInTenant>("/contact-requests", request);
  return result.data;
}
