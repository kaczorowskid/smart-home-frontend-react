import { type ReactNode } from "react";
import { type OptionsTab } from "../Options.types";

export type FormProviderProps = {
  usersForm: ReactNode;
  roomsForm: ReactNode;
  rolesForm: ReactNode;
  devicesForm: ReactNode;
  selectedTab: OptionsTab;
};
