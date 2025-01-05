import { api } from "@/lib/axios";

export async function selectShareRequest(id: string) {
  const result = await api.patch(`/share-requests/select/${id}`);
  return result.data;
}
