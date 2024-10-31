import { Dispatch, SetStateAction } from "react";

export type SearchbarProps = {
  searchbarValue: string;
  setSearchbarValue: Dispatch<SetStateAction<string>>;
};
