import { ColumnType } from "../../common/Table/Table.types";

import { User } from "@/api/types/common.types";

export const columns: ColumnType<User>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Surname",
    dataIndex: "surname",
    key: "surname",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
];
