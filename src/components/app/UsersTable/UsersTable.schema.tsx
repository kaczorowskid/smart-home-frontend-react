import { ColumnType } from "../../common/Table/Table.types";
import { User } from "@/api/types/common.types";
import { RoleBadge } from "./RoleBadge";
import { VerifiedBadge } from "./VerifiedBadge";

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
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (role) => <RoleBadge role={role} />,
  },
  {
    title: "Is verified",
    dataIndex: "isVerified",
    key: "isVerified",
    render: (isVerified) => <VerifiedBadge isVerified={isVerified} />,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
];
