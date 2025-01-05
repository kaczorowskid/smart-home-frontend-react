import { create } from "zustand";
import { UserStoreProps } from "./userStore.type";

export const useUserStore = create<UserStoreProps>((set) => ({
  id: "",
  email: "",
  name: "",
  surname: "",
  role: {
    id: "",
    name: "",
    permissions: [],
  },
  isVerified: false,
  isLoggedIn: false,
  setUser: (userData) => {
    set((state) => ({
      ...state,
      ...userData,
    }));
  },
}));
