import { refreshUserAccessToken } from "@/api/handlers/auth.handlers";
import { AxiosError } from "axios";

export const handleApiError = async (error: Error) => {
  if (error instanceof AxiosError) {
    if (error.response?.status === 401) {
      try {
        const data = await refreshUserAccessToken();

        if (data.id) {
          window.location.reload();
        }
      } catch (err) {
        console.log("error ", err);
      }
    }
  }
};
