import { api } from "@/lib/axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  userId: string;
  email: string;
  name: string;
  isLandlord: boolean;
  accessToken: string;
  property?: string;
}

export async function signIn(request: LoginRequest): Promise<LoginResponse> {
  const result = await api.post<LoginResponse>("/auth/login", request);
  return result.data;
}
