import { Dispatch, SetStateAction } from "react";

export type UsersTableProps = {
  setSelectedEmail: Dispatch<SetStateAction<string>>;
};
