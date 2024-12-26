import { api } from "@/lib/axios";
import { PropertiesOfInterest } from "@/shared/properties-of-interest";

export async function findPropertiesOfInterest(): Promise<PropertiesOfInterest[]> {
  const result = await api.get<PropertiesOfInterest[]>("/tenants/properties-of-interest");
  return result.data;
}
