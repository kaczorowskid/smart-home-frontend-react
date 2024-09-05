export interface UserStore {
  id: string;
  email: string;
  name: string;
  surname: string;
  isLoggedIn: boolean;
}

export type UserStoreProps = {
  setUser: (userData: UserStore) => void;
} & UserStore;
