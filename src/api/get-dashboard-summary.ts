import { api } from "@/lib/axios";
import { DashboardSummary } from "@/shared/dashboard-summary";

interface GetDashboardSummaryRequest {
  landlordId: string;
}

export async function getDashboardSummary(request: GetDashboardSummaryRequest): Promise<DashboardSummary> {
  const response = await api.get<DashboardSummary>(`/landlords/dashboard/${request.landlordId}`);
  return response.data;
}
