import { UserRole } from "@/types/common.types";

export interface UserStore {
  id: string;
  email: string;
  name: string;
  surname: string;
  role: UserRole;
  isVerified: boolean;
  isLoggedIn: boolean;
}

export type UserStoreProps = {
  setUser: (userData: UserStore) => void;
} & UserStore;
