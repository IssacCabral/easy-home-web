import { findPropertiesOfInterest } from "@/api/find-properties-of-interest";
import { AuthContext } from "@/contexts/auth-context";
import { PropertiesOfInterest } from "@/shared/properties-of-interest";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export function usePropertiesOfInterest() {
  const { userSession } = useContext(AuthContext);

  const { data: result, isLoading } = useQuery({
    queryKey: ["properties-of-interest", userSession?.userId],
    queryFn: () => findPropertiesOfInterest(),
  });

  const foundPropertiesOfInterest: PropertiesOfInterest[] = result
    ? result.map((item) => ({
        id: item.id,
        property: item.property,
        requestDate: item.requestDate,
        status: item.status,
        type: item.type,
        finalizationReason: item.finalizationReason,
      }))
    : [];

  return {
    foundPropertiesOfInterest,
    isLoading,
  };
}
