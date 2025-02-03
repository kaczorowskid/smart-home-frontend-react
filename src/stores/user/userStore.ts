import { create } from "zustand";
import { type UserStore, type UserStoreProps } from "./userStore.type";

const initialStore: UserStore = {
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
};

export const useUserStore = create<UserStoreProps>((set) => ({
  ...initialStore,
  setUser: ({ id, name, role, email, surname, isLoggedIn, isVerified }) => {
    set((state) => ({
      ...state,
      id,
      name,
      role,
      email,
      surname,
      isLoggedIn,
      isVerified,
    }));
  },
}));
