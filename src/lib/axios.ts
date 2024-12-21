import { LoginResponse } from "@/api/sign-in";
import { env } from "@/env";
import { AuthErrors } from "@/shared/authErrors";
import axios from "axios";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
});

// antes de todas as requisições do axios, essa função é executada,
// caso a variável de ambiente abaixo seja true
if (env.VITE_API_ENABLE_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, Math.round(Math.random() * 3000)));

    return config;
  });
}

api.interceptors.request.use((config) => {
  const userSession = localStorage.getItem("userSession");
  if (userSession) {
    const parsedUserSession = JSON.parse(userSession) as LoginResponse;
    config.headers.Authorization = `Bearer ${parsedUserSession.accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorCode = error.response?.data?.code;
    const authErrorCodes = Object.values(AuthErrors);

    if (authErrorCodes.includes(errorCode)) {
      window.location.href = "/sign-in";
    }
  },
);
