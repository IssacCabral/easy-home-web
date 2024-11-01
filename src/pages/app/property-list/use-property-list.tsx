import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { defaultValues, findPropertiesForm, FindPropertiesForm } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { findProperties } from "@/api/find-properties";
import { INITIAL_COORDS } from "@/utils/initial-coords";
import { PropertyStatus, PropertyTypes } from "@/shared/property";
import { fetchCoordinatesFromAddress } from "@/utils/geocoding";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

export function usePropertyList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [street, setStreet] = useState("");

  const centralLat = searchParams.get("centralLat");
  const centralLon = searchParams.get("centralLon");
  const page = searchParams.get("page");
  const radiusInMeters = searchParams.get("radiusInMeters");
  const minBedrooms = searchParams.get("minBedrooms");
  const maxBedrooms = searchParams.get("maxBedrooms");
  const status = searchParams.get("status");
  const maxPrice = searchParams.get("maxPrice");
  const type = searchParams.get("type");
  const amenities = searchParams.get("amenities");

  const checkedLat = Number(centralLat) || INITIAL_COORDS.lat;
  const checkedLon = Number(centralLon) || INITIAL_COORDS.lon;

  const form = useForm<FindPropertiesForm>({
    resolver: zodResolver(findPropertiesForm),
    defaultValues,
  });

  const { data: result, isLoading } = useQuery({
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
      type,
      amenities,
    ],
    queryFn: () =>
      findProperties({
        centralLat: checkedLat,
        centralLon: checkedLon,
        page: Number(page) || 1,
        radiusInMeters: Number(radiusInMeters) || defaultValues.radiusInMeters,
        minBedrooms: Number(minBedrooms) || defaultValues.minBedrooms,
        maxBedrooms: Number(maxBedrooms) || defaultValues.maxBedrooms,
        maxPrice: Number(maxPrice) || defaultValues.maxPrice,
        status: PropertyStatus[status as PropertyStatus] || undefined,
        type: PropertyTypes[type as PropertyTypes] || PropertyTypes[defaultValues.propertyTypes],
        amenities: amenities ? amenities.split(",") : undefined,
      }),
  });

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set("page", (pageIndex + 1).toString());

      return state;
    });
  }

  const foundProperties = result?.data
    ? result?.data.map((item) => {
        return {
          id: item.id,
          lat: item.address.lat,
          lon: item.address.lon,
          status: item.status,
          title: item.title,
          street: item.address.street,
          addressNumber: item.address.addressNumber,
          price: item.price,
        };
      })
    : [];

  useEffect(() => {
    if (result?.meta.total === 0 && !isLoading) {
      toast({
        variant: "destructive",
        description: "Não foram encontrados imóveis.",
      });
    }
  }, [result, isLoading]);

  function handleFilter(data: FindPropertiesForm, lat: number, lon: number) {
    setSearchParams((state) => {
      state.set("centralLat", lat.toString());
      state.set("centralLon", lon.toString());
      state.set("page", (1).toString());
      state.set("radiusInMeters", data.radiusInMeters.toString());
      state.set("minBedrooms", data.minBedrooms.toString());
      state.set("maxBedrooms", data.maxBedrooms.toString());
      if (data.propertyStatus) {
        state.set("status", data.propertyStatus);
      }
      state.set("maxPrice", data.maxPrice.toString());
      state.set("type", data.propertyTypes);
      if (data.amenities && data.amenities.length > 0) {
        state.set("amenities", data.amenities.toString());
      } else {
        state.delete("amenities");
      }

      return state;
    });
  }

  async function handleFindProperties(data: FindPropertiesForm) {
    try {
      const { lat, lon, street } = await fetchCoordinatesFromAddress(data.location);

      setStreet(street);
      handleFilter(data, lat, lon);
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
    checkedLat,
    checkedLon,
    isLoading,
    street,
    foundProperties,
    handleFindProperties,
    handlePaginate,
  };
}
