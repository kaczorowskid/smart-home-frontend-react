import { type User } from "@/api/types/common.types";

export type UserStoreProps = UserStore & {
  setUser: (userData: UserStore) => void;
};

export interface UserStore {
  id: string;
  name: string;
  email: string;
  surname: string;
  role: User["role"];
  isVerified: boolean;
  isLoggedIn: boolean;
}
