import { api } from "@/lib/axios";

interface PropertyRatingResponse {
  rating: number;
}

export async function findPropertyRating(request: { propertyId: string }): Promise<PropertyRatingResponse> {
  const result = await api.get<PropertyRatingResponse>(`/property-reviews/rating/${request.propertyId}`);
  return result.data;
}
