import { createContactRequest } from "@/api/create-contact-request";
import { createShareRequest } from "@/api/create-share-request";
import { findProperty } from "@/api/find-property";
import { findPropertyRating } from "@/api/find-property-rating";
import { findPropertyReviews } from "@/api/find-property-reviews";
import { Spinner } from "@/components/ui/spinner";
import { AuthContext } from "@/contexts/auth-context";
import { toast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export function usePropertyDetails() {
  const { id } = useParams();
  const { userSession } = useContext(AuthContext);
  const tenantId = userSession?.userId;

  const {
    data: result,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["property-details", id],
    queryFn: async () => {
      try {
        const property = await findProperty({ id: id! });
        if (!property) {
          throw new Error("Imóvel não encontrado.");
        }
        return property;
      } catch (err) {
        throw toast({
          variant: "destructive",
          description: "Imóvel não encontrado.",
        });
      }
    },
    retry: false,
  });

  let loadingOrError = null;

  if (isLoading) {
    loadingOrError = (
      <div className="flex min-h-[calc(100vh-12.5rem)] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    loadingOrError = (
      <div className="flex min-h-[calc(100vh-12.5rem)] items-center justify-center">
        <p className="font-semibold text-destructive">Imóvel não encontrado.</p>
      </div>
    );
  }

  const { mutateAsync: createContactRequestFn } = useMutation({
    mutationFn: createContactRequest,
  });

  async function confirmContactRequest(data: { propertyId: string; tenantId: string }) {
    return await createContactRequestFn({
      propertyId: data.propertyId,
      tenantId: data.tenantId,
    });
  }

  const { mutateAsync: createShareRequestFn } = useMutation({
    mutationFn: createShareRequest,
  });

  async function confirmShareRequest(data: { propertyId: string; tenantId: string }) {
    return await createShareRequestFn({
      propertyId: data.propertyId,
      tenantId: data.tenantId,
    });
  }

  const { data: propertyRatingResult } = useQuery({
    queryKey: ["property-rating", id],
    queryFn: async () => {
      try {
        const propertyRating = await findPropertyRating({ propertyId: id! });
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

  const { data: propertyReviewsResult } = useQuery({
    queryKey: ["property-reviews", id],
    queryFn: async () => {
      try {
        const propertyReviews = await findPropertyReviews(id!);
        if (!propertyReviews) {
          throw new Error("Avaliações não encontradas.");
        }

        return propertyReviews;
      } catch (err) {
        throw toast({
          variant: "destructive",
          description: "Avaliações não encontradas.",
        });
      }
    },
    retry: false,
  });

  return {
    loadingOrError,
    result,
    propertyRatingResult,
    propertyReviewsResult,
    tenantId,
    confirmContactRequest,
    confirmShareRequest,
  };
}
