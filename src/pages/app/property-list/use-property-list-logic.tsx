import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import {
  defaultValues,
  findPropertiesForm,
  FindPropertiesForm,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { findProperties } from "@/api/find-properties";
import { INITIAL_COORDS } from "@/utils/initial-coords";
import { PropertyStatus, PropertyTypes } from "@/shared/property";
import { fetchCoordinatesFromAddress } from "@/utils/geocoding";
import { toast } from "@/hooks/use-toast";

export function usePropertyList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const centralLat = searchParams.get("centralLat");
  const centralLon = searchParams.get("centralLon");
  const page = searchParams.get("page");
  const radiusInMeters = searchParams.get("radiusInMeters");
  const minBedrooms = searchParams.get("minBedrooms");
  const maxBedrooms = searchParams.get("maxBedrooms");
  const status = searchParams.get("status");
  const maxPrice = searchParams.get("maxPrice");
  const type = searchParams.get("type");

  const form = useForm<FindPropertiesForm>({
    resolver: zodResolver(findPropertiesForm),
    defaultValues,
  });

  const { data: result, refetch } = useQuery({
    queryKey: [
      "property-list",
      centralLat,
      centralLon,
      page,
      radiusInMeters,
      minBedrooms,
      maxBedrooms,
      status,
      maxPrice,
    ],
    queryFn: () =>
      findProperties({
        centralLat: centralLat ? Number(centralLat) : INITIAL_COORDS.lat,
        centralLon: centralLon ? Number(centralLon) : INITIAL_COORDS.lon,
        page: page ? Number(page) : 1,
        radiusInMeters: radiusInMeters
          ? Number(radiusInMeters)
          : defaultValues.radiusInMeters,
        minBedrooms: minBedrooms
          ? Number(minBedrooms)
          : defaultValues.minBedrooms,
        maxBedrooms: maxBedrooms
          ? Number(maxBedrooms)
          : defaultValues.maxBedrooms,
        maxPrice: maxPrice ? Number(maxPrice) : defaultValues.maxPrice,
        status: status
          ? PropertyStatus[status as PropertyStatus]
          : PropertyStatus[defaultValues.propertyStatus],
        type: type
          ? PropertyTypes[type as PropertyTypes]
          : PropertyTypes[defaultValues.propertyTypes],
      }),
    enabled: false, // Desativa a busca automática
  });

  function handleFilter(data: FindPropertiesForm, lat: number, lon: number) {
    setSearchParams((state) => {
      state.set("centralLat", lat.toString());
      state.set("centralLon", lon.toString());
      state.set("page", "1");
      state.set("radiusInMeters", data.radiusInMeters.toString());
      state.set("minBedrooms", data.minBedrooms.toString());
      state.set("maxBedrooms", data.maxBedrooms.toString());
      state.set("status", data.propertyStatus);
      state.set("maxPrice", data.maxPrice.toString());
      state.set("type", data.propertyTypes);

      return state;
    });
  }

  async function handleFindProperties(data: FindPropertiesForm) {
    try {
      const { lat, lon } = await fetchCoordinatesFromAddress(data.location);
      handleFilter(data, lat, lon);
      refetch(); // Dispara a nova busca após o envio do formulário
    } catch (err) {
      console.log("err:", err);
      toast({
        variant: "destructive",
        description: "Erro ao buscar imóveis",
      });
    }
  }

  return {
    form,
    result,
    handleFindProperties,
    centralLat: centralLat ? Number(centralLat) : INITIAL_COORDS.lat,
    centralLon: centralLon ? Number(centralLon) : INITIAL_COORDS.lon,
  };
}
