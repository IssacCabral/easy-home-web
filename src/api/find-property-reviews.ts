import { api } from "@/lib/axios";
import { IPropertyReviewEntity } from "@/shared/property-reviews";

export async function findPropertyReviews(propertyId: string): Promise<IPropertyReviewEntity[]> {
  const result = await api.get<IPropertyReviewEntity[]>(`/property-reviews/${propertyId}`);
  return result.data;
}
