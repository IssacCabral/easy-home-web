import { api } from "@/lib/axios";
import { IPropertyEntity } from "@/shared/property";

interface Request {
  propertyId: string;
  tenantId: string;
}

export async function stopTenantRentDivision(request: Request): Promise<IPropertyEntity> {
  const result = await api.post<IPropertyEntity>("/rent-divisions/stop", request);
  return result.data;
}
