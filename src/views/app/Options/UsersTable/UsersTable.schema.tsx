import { FormattedMessage } from "react-intl";
import { Badge } from "@/components/ui/badge";
import { type User } from "@/api/types/common.types";
import { type ColumnType } from "@/components/common/Table/Table.types";
import { userVerifyMapper } from "./UsersTable.utils";

export const columns: ColumnType<User>[] = [
  {
    key: "name",
    dataIndex: "name",
    title: <FormattedMessage id="table.user-name" />,
  },
  {
    key: "surname",
    dataIndex: "surname",
    title: <FormattedMessage id="table.user-surname" />,
  },
  {
    key: "email",
    dataIndex: "email",
    title: <FormattedMessage id="table.email" />,
  },
  {
    key: "role",
    dataIndex: "role",
    title: <FormattedMessage id="table.role" />,
    render: (role: User["role"]) => <Badge>{role.name}</Badge>,
  },
  {
    key: "isVerified",
    dataIndex: "isVerified",
    title: <FormattedMessage id="table.verify" />,
    render: (isVerified: User["isVerified"]) => (
      <Badge variant="outline">{userVerifyMapper(isVerified)}</Badge>
    ),
  },
  {
    key: "id",
    dataIndex: "id",
    title: <FormattedMessage id="table.id" />,
  },
];
