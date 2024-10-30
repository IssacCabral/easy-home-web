import { api } from "@/lib/axios";
import { IPropertyEntity } from "@/shared/property";

interface FindPropertyRequest {
  id: string;
}

type FindPropertyResponse = IPropertyEntity | null;

export async function findProperty(request: FindPropertyRequest): Promise<FindPropertyResponse> {
  const response = await api.get<FindPropertyResponse>(`/properties/${request.id}`);
  return response.data;
}
