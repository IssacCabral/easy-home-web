import { api } from "@/lib/axios";
import { IAddressEntity } from "@/shared/address";
import { IPropertyEntity, PropertyTypes } from "@/shared/property";

export type CreatePropertyInput = {
  landlordId: string;
  title: string;
  type: PropertyTypes;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  depth: number;
  width: number;
  address: Omit<IAddressEntity, "id">;
  amenityIds: string[];
};

export async function createProperty(input: CreatePropertyInput): Promise<IPropertyEntity> {
  const result = await api.post<IPropertyEntity>("/properties", input);
  return result.data;
}
