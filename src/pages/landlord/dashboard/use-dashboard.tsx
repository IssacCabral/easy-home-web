import { getDashboardSummary } from "@/api/get-dashboard-summary";
import { AuthContext } from "@/contexts/auth-context";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export function useDashboard() {
  const { userSession } = useContext(AuthContext);
  const { data: result, isLoading } = useQuery({
    queryKey: ["dashboard-summary", userSession.userId],
    queryFn: () => getDashboardSummary({ landlordId: userSession.userId }),
  });

  return { result, isLoading };
}
