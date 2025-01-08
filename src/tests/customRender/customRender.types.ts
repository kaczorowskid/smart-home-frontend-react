import { type ReactNode } from "react";
import { type UserStore } from "@/stores/user";

export type AppWithProvidersProps = {
  ui: ReactNode;
};

export type Options = {
  initialState: Partial<UserStore>;
};
