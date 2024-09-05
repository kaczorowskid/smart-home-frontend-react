import axios from "axios";

const baseUrl =
  import.meta.env.VITE_ENV === "development"
    ? import.meta.env.VITE_DEVELOPMENT_API
    : import.meta.env.VITE_PROD_API;

const headers = {
  "Content-Type": "application/json",
};

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers,
  withCredentials: true,
});
