import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { defaultValues, propertyManagementForm, PropertyManagementForm } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { findLandlordProperties } from "@/api/find-landlord-properties";
import { useSearchParams } from "react-router-dom";
import { PropertyStatus } from "@/shared/property";

export function usePropertyManagement() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  // const status = searchParams.get("status");
  const tenantName = searchParams.get("tenantName");
  const title = searchParams.get("title");

  const form = useForm<PropertyManagementForm>({
    resolver: zodResolver(propertyManagementForm),
    defaultValues,
  });

  const { data: result, isLoading } = useQuery({
    queryKey: ["landlord-properties", page, tenantName, title],
    queryFn: () =>
      findLandlordProperties({
        landlordId: "8464b3f6-5551-4633-ba4e-9d26389b69c9",
        page: Number(page) || 1,
        // status: PropertyStatus[status as PropertyStatus] || undefined,
        tenantName: tenantName || undefined,
        title: title || undefined,
      }),
  });

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set("page", (pageIndex + 1).toString());

      return state;
    });
  }

  const foundProperties = result?.data
    ? result?.data.map((item) => ({
        id: item.id,
        title: item.title,
        street: item.address.street,
        addressNumber: item.address.addressNumber,
        status: item.status,
        publishedAt: item.createdAt ? new Date(item.createdAt) : undefined,
        price: item.price,
        tenantName: item.tenants![0]?.name,
      }))
    : [];

  function handleFindLandlordProperties(data: PropertyManagementForm) {
    setSearchParams((state) => {
      state.set("page", (1).toString());

      if (data.tenant) {
        state.set("tenantName", data.tenant);
      } else {
        state.delete("tenantName");
      }

      if (data.title) {
        state.set("title", data.title);
      } else {
        state.delete("title");
      }

      return state;
    });
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete("title");
      state.delete("tenantName");
      // state.delete("status")

      return state;
    });

    form.reset({
      title: "",
      tenant: "",
      status: "all",
    });
  }

  return {
    form,
    result,
    foundProperties,
    isLoading,
    handleFindLandlordProperties,
    handleClearFilters,
    handlePaginate,
  };
}
