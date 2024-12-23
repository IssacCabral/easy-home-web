import { api } from "@/lib/axios";
import { ContactRequestStatus, IContactRequestEntity } from "@/shared/contact-request";
import { PaginationData, PaginationParams } from "@/shared/pagination";

type FindLandlordContactRequestsRequest = {
  title?: string;
  applicant?: string;
  status?: ContactRequestStatus;
} & PaginationParams;

type FindLandlordContactRequestsResponse = PaginationData<IContactRequestEntity>;

export const perPageLimit = 10;

function setPayload(request: FindLandlordContactRequestsRequest) {
  return {
    page: request.page,
    limit: perPageLimit,
    title: request.title,
    tenantName: request.applicant,
    status: request.status,
  };
}

export async function findLandlordContactRequests(
  request: FindLandlordContactRequestsRequest,
): Promise<FindLandlordContactRequestsResponse> {
  const response = await api.get<FindLandlordContactRequestsResponse>("/contact-requests", {
    params: setPayload(request),
  });
  return response.data;
}
