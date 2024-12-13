import { CustomAxiosError } from "@/types/common.types";

export const apiErrorMapper = (error: CustomAxiosError) =>
  error?.response?.data.message || error.message;
