import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { contactRequestsForm, ContactRequestsForm, defaultValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { findLandlordContactRequests } from "@/api/find-landlord-contact-requests";
import { ContactRequestStatus } from "@/shared/contact-request";

export function useContactRequests() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const status = searchParams.get("status");
  const applicant = searchParams.get("applicant");
  const title = searchParams.get("title");

  const form = useForm<ContactRequestsForm>({
    resolver: zodResolver(contactRequestsForm),
    defaultValues,
  });

  const { data: result, isLoading } = useQuery({
    queryKey: ["contact-requests", page, applicant, title, status],
    queryFn: () =>
      findLandlordContactRequests({
        page: Number(page) || 1,
        status: ContactRequestStatus[status as ContactRequestStatus] || undefined,
        applicant: applicant || undefined,
        title: title || undefined,
      }),
  });

  const foundContactRequests = result?.data
    ? result?.data.map((item) => ({
        id: item.id,
        propertyTitle: item.property.title,
        street: item.property.address!.street,
        addressNumber: item.property.address!.addressNumber,
        status: item.status,
        requestDate: new Date(item.requestDate),
        price: item.property.price,
        applicant: item.tenant.name,
      }))
    : [];

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set("page", (pageIndex + 1).toString());

      return state;
    });
  }

  function handleFindLandlordContactRequests(data: ContactRequestsForm) {
    setSearchParams((state) => {
      state.set("page", (1).toString());

      if (data.applicant) {
        state.set("applicant", data.applicant);
      } else {
        state.delete("applicant");
      }

      if (data.status && data.status !== "all") {
        state.set("status", data.status);
      } else {
        state.delete("status");
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
      state.delete("applicant");
      state.delete("status");

      return state;
    });

    form.reset({
      title: "",
      applicant: "",
      status: "all",
    });
  }

  return {
    form,
    result,
    isLoading,
    foundContactRequests,
    handleFindLandlordContactRequests,
    handleClearFilters,
    handlePaginate,
  };
}
