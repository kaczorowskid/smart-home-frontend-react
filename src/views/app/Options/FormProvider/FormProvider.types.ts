import { ReactNode } from "react";
import { OptionsTab } from "../Options.types";

export type FormProviderProps = {
  selectedTab: OptionsTab;
  devicesForm: ReactNode;
  usersForm: ReactNode;
  roomsForm: ReactNode;
};
