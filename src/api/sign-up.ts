import { api } from "@/lib/axios";
import { AxiosResponse } from "axios";

export interface RegisterUserBody {
  name: string;
  phone: string;
  user: "landlord" | "tenant";
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  id: string;
  name: string;
  number: string;
  email: string;
  password: string;
  profilePicUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

function setRegisterUserPayload(request: RegisterUserBody) {
  return {
    name: request.name,
    number: request.phone,
    email: request.email,
    password: request.password,
  };
}

export async function registerUser(
  request: RegisterUserBody,
): Promise<RegisterUserResponse> {
  let result: AxiosResponse<RegisterUserResponse>;

  switch (request.user) {
    case "tenant": {
      result = await api.post<RegisterUserResponse>(
        "/tenants",
        setRegisterUserPayload(request),
      );
      return result.data;
    }
    case "landlord":
      result = await api.post<RegisterUserResponse>(
        "/landlords",
        setRegisterUserPayload(request),
      );
      return result.data;
  }
}
