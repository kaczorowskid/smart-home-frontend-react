import { type UserStore } from "@/stores/user";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const defaultStore: UserStore = {
  name: "Test",
  surname: "User",
  isVerified: true,
  isLoggedIn: true,
  email: "test@test.com",
  id: "07237798-d4a3-48ff-81d0-089ef54a1831",
  role: {
    name: "ADMIN",
    id: "07237298-d4a3-48ff-81d0-089ef54a1831",
    permissions: [
      {
        permission: "IS_ADMIN",
        id: "17237298-d4a3-48ff-81d0-089ef54a1831",
        roleId: "07237298-d4a3-48ff-81d0-089ef54a1831",
      },
    ],
  },
};
