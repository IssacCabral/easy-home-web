import { env } from "@/env";
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
