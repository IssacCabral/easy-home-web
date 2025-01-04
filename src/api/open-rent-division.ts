import { api } from "@/lib/axios";
import { IPropertyEntity } from "@/shared/property";

export async function openRentDivision(propertyId: string): Promise<IPropertyEntity> {
  const result = await api.patch<IPropertyEntity>(`/rent-divisions/open/${propertyId}`);
  return result.data;
}
