import { cancelRentDivision } from "@/api/cancel-rent-division";
import { completeRentDivision } from "@/api/complete-rent-division";
import { findProperty } from "@/api/find-property";
import { findPropertyRating } from "@/api/find-property-rating";
import { findShareRequests } from "@/api/find-share-requests";
import { findSharedRentalTenants } from "@/api/find-shared-rental-tenants";
import { openRentDivision } from "@/api/open-rent-division";
import { Spinner } from "@/components/ui/spinner";
import { AuthContext } from "@/contexts/auth-context";
import { Toast, toast } from "@/hooks/use-toast";
import { RentDivisionErrors } from "@/shared/rent-division-errors";
import { useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useContext } from "react";

export function UseRentDivision() {
  const { userSession } = useContext(AuthContext);

  const { data: property, isLoading } = useQuery({
    queryKey: ["property-details", userSession?.property],
    queryFn: async () => {
      try {
        const property = await findProperty({ id: userSession!.property! });
        if (!property) {
          throw new Error("Imóvel não encontrado.");
        }
        return property;
      } catch (err) {
        throw toast({
          variant: "destructive",
          description: "Imóvel não encontrado",
        });
      }
    },
  });

  let loading = null;

  if (isLoading) {
    loading = (
      <div className="items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const { data: propertyRatingResult } = useQuery({
    queryKey: ["property-rating", userSession?.property],
    queryFn: async () => {
      try {
        const propertyRating = await findPropertyRating({ propertyId: userSession!.property! });
        if (!propertyRating) {
          throw new Error("Avaliação não encontrada.");
        }

        return propertyRating;
      } catch (err) {
        throw toast({
          variant: "destructive",
          description: "Avaliação não encontrada.",
        });
      }
    },
    retry: false,
  });

  const { data: shareRequestsResult, isLoading: isLoadingShareRequests } = useQuery({
    queryKey: ["share-requests", userSession?.property],
    queryFn: async () => {
      try {
        return await findShareRequests(userSession!.property!);
      } catch (err) {
        throw toast({
          variant: "destructive",
          description: "Erro ao buscar solicitações.",
        });
      }
    },
  });

  let loadingShareRequests = null;

  if (isLoadingShareRequests) {
    loadingShareRequests = (
      <div className="items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const { data: sharedRentalTenantsResult, isLoading: isLoadingSharedRentalTenants } = useQuery({
    queryKey: ["shared-rental-tenants", userSession?.property],
    queryFn: async () => {
      try {
        return await findSharedRentalTenants(userSession!.property!);
      } catch (err) {
        throw toast({
          variant: "destructive",
          description: "Erro ao buscar colegas de imóvel.",
        });
      }
    },
  });

  let loadingSharedRentalTenants = null;

  if (isLoadingSharedRentalTenants) {
    loadingSharedRentalTenants = (
      <div className="items-center justify-center">
        <Spinner />
      </div>
    );
  }

  async function confirmOpenRentDivision() {
    try {
      await openRentDivision(userSession!.property!);
      window.location.reload();
    } catch (err) {
      console.log(err);
      throw toast({
        variant: "destructive",
        description: "Um erro ocorreu ao abrir a divisão de aluguel",
      });
    }
  }

  async function confirmCompleteRentDivision() {
    try {
      await completeRentDivision(userSession!.property!);
      window.location.reload();
    } catch (err) {
      const toastData: Toast = {
        variant: "destructive",
        description: "Um erro ocorreu ao concluir a divisão.",
      };

      if (isAxiosError(err)) {
        if (err.response?.data.code === RentDivisionErrors.NO_TENANTS_SELECTED) {
          toastData.description = "Você precisa selecionar pelo menos um usuário para dividir aluguel.";
        }
      }

      throw toast(toastData);
    }
  }

  async function confirmCancelRentDivision() {
    try {
      await cancelRentDivision(userSession!.property!);
      window.location.reload();
    } catch (err) {
      console.log(err);
      throw toast({
        variant: "destructive",
        description: "Um erro ocorreu ao cancelar a divisão de aluguel",
      });
    }
  }

  return {
    property,
    loading,
    loadingShareRequests,
    loadingSharedRentalTenants,
    propertyRatingResult,
    shareRequestsResult,
    sharedRentalTenantsResult,
    confirmOpenRentDivision,
    confirmCompleteRentDivision,
    confirmCancelRentDivision,
  };
}
