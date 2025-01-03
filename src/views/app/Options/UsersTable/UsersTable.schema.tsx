import { ColumnType } from "@/components/common/Table/Table.types";
import { User } from "@/api/types/common.types";
import { FormattedMessage } from "react-intl";
import { userVerifyMapper } from "./UsersTable.utils";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnType<User>[] = [
  {
    title: <FormattedMessage id="table.user-name" />,
    dataIndex: "name",
    key: "name",
  },
  {
    title: <FormattedMessage id="table.user-surname" />,
    dataIndex: "surname",
    key: "surname",
  },
  {
    title: <FormattedMessage id="table.email" />,
    key: "email",
    dataIndex: "email",
  },
  {
    title: <FormattedMessage id="table.role" />,
    dataIndex: "role",
    key: "role",
    render: (role: User["role"]) => (
      <Badge variant="outline">{role.name}</Badge>
    ),
  },
  {
    title: <FormattedMessage id="table.verify" />,
    dataIndex: "isVerified",
    key: "isVerified",
    render: (isVerified: User["isVerified"]) => (
      <Badge variant="outline">{userVerifyMapper(isVerified)}</Badge>
    ),
  },
  {
    title: <FormattedMessage id="table.id" />,
    dataIndex: "id",
    key: "id",
  },
];
