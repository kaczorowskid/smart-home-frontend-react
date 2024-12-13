import { QueryCache, QueryClient } from "@tanstack/react-query";
import { handleApiError } from "./handleApiError";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleApiError,
  }),
});
