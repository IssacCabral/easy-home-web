import { api } from "@/lib/axios";
import { IPropertyReviewEntity, Rating } from "@/shared/property-reviews";

type InputCreatePropertyReview = {
  propertyId: string;
  tenantId: string;
  rating: Rating;
  comment: string;
};

export async function createPropertyReview(request: InputCreatePropertyReview): Promise<IPropertyReviewEntity> {
  const result = await api.post<IPropertyReviewEntity>("/property-reviews", request);
  return result.data;
}
