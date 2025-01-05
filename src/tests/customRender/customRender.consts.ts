import { UserStore } from "@/stores/user";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const defaultStore: UserStore = {
  id: "07237798-d4a3-48ff-81d0-089ef54a1831",
  email: "test@test.com",
  name: "Test",
  surname: "User",
  role: {
    id: "07237298-d4a3-48ff-81d0-089ef54a1831",
    name: "ADMIN",
    permissions: [
      {
        id: "17237298-d4a3-48ff-81d0-089ef54a1831",
        roleId: "07237298-d4a3-48ff-81d0-089ef54a1831",
        permission: "IS_ADMIN",
      },
    ],
  },
  isVerified: true,
  isLoggedIn: true,
};
