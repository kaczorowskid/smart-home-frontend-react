import { Dispatch, SetStateAction } from "react";

export type ExtraButtonProps = {
  isDashboardPart: boolean;
  searchbarValue: string;
  setSearchbarValue: Dispatch<SetStateAction<string>>;
};
