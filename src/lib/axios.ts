import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

export const axiosInstance = axios.create({
  headers,
  withCredentials: true,
  baseURL: import.meta.env.VITE_API,
});
