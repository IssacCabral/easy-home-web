import { api } from "@/lib/axios";

export async function cancelRentDivision(propertyId: string) {
  const result = await api.patch(`/rent-divisions/cancel/${propertyId}`);
  return result.data;
}
