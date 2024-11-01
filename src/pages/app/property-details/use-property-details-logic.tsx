import { findProperty } from "@/api/find-property";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function usePropertyDetails() {
  const { id } = useParams();

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

  return {
    loadingOrError,
    result,
  };
}
