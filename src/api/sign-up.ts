import { api } from "@/lib/axios";
import { AxiosResponse } from "axios";

export interface RegisterUserRequest {
  name: string;
  phone: string;
  user: "landlord" | "tenant";
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  profilePicUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

function setRegisterUserPayload(request: RegisterUserRequest) {
  return {
    name: request.name,
    phone: request.phone,
    email: request.email,
    password: request.password,
  };
}

export async function registerUser(request: RegisterUserRequest): Promise<RegisterUserResponse> {
  let result: AxiosResponse<RegisterUserResponse>;

  switch (request.user) {
    case "tenant": {
      result = await api.post<RegisterUserResponse>("/tenants", setRegisterUserPayload(request));
      return result.data;
    }
    case "landlord":
      result = await api.post<RegisterUserResponse>("/landlords", setRegisterUserPayload(request));
      return result.data;
  }
}
