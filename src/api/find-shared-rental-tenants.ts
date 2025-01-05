import { api } from "@/lib/axios";
import { ITenantEntity } from "@/shared/tenant";

export async function findSharedRentalTenants(propertyId: string): Promise<ITenantEntity[]> {
  const result = await api.get<ITenantEntity[]>(`/rent-divisions/${propertyId}`);
  return result.data;
}
