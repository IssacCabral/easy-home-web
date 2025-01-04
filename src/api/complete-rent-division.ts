import { api } from "@/lib/axios";

export async function completeRentDivision(propertyId: string) {
  await api.post(`/rent-divisions/complete/${propertyId}`);
}
