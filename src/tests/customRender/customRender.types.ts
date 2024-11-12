import { UserStore } from "@/stores/user";
import { ReactNode } from "react";

export type AppWithProvidersProps = {
  ui: ReactNode;
};

export type Options = {
  initialState: Partial<UserStore>;
};
