import { User } from "@/api/types/common.types";

export interface UserStore {
  id: string;
  email: string;
  name: string;
  surname: string;
  role: User["role"];
  isVerified: boolean;
  isLoggedIn: boolean;
}

export type UserStoreProps = {
  setUser: (userData: UserStore) => void;
} & UserStore;
