import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers,
  withCredentials: true,
});
