import { UserStore } from "@/stores/user";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const defaultStore: UserStore = {
  id: "07237798-d4a3-48ff-81d0-089ef54a1831",
  email: "test@test.com",
  name: "Test",
  surname: "User",
  role: "ADMIN",
  isVerified: true,
  isLoggedIn: true,
};
