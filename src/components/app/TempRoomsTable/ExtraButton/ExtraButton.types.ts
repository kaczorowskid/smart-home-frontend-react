import { Dispatch, SetStateAction } from "react";

export type ExtraButtonProps = {
  searchbarValue: string;
  setSearchbarValue: Dispatch<SetStateAction<string>>;
};
