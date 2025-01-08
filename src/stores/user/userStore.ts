import { create } from "zustand";
import { type UserStoreProps } from "./userStore.type";

export const useUserStore = create<UserStoreProps>((set) => ({
  id: "",
  name: "",
  email: "",
  surname: "",
  isVerified: false,
  isLoggedIn: false,
  role: {
    id: "",
    name: "",
    permissions: [],
  },
  setUser: (userData) => {
    set((state) => ({
      ...state,
      ...userData,
    }));
  },
}));
