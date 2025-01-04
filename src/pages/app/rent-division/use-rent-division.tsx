import { findProperty } from "@/api/find-property";
import { findPropertyRating } from "@/api/find-property-rating";
import { openRentDivision } from "@/api/open-rent-division";
import { Spinner } from "@/components/ui/spinner";
import { AuthContext } from "@/contexts/auth-context";
import { toast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
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

  async function confirmOpenRentDivision() {
    try {
      await openRentDivision(userSession!.property!);
      window.location.reload();
    } catch (err) {
      console.log(err);
      throw toast({
        variant: "destructive",
        description: "Um erro ocorreu",
      });
    }
  }

  async function confirmCompleteRentDivision() {}

  async function confirmCancelRentDivision() {}

  return {
    property,
    loading,
    propertyRatingResult,
    confirmOpenRentDivision,
    confirmCompleteRentDivision,
    confirmCancelRentDivision,
  };
}
