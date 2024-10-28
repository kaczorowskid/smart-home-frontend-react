import { ReactNode } from "react";
import { Views } from "../Settings.types";

export type FormProviderProps = {
  selectedTab: Views;
  devicesForm: ReactNode;
  usersForm: ReactNode;
  roomsForm: ReactNode;
};
