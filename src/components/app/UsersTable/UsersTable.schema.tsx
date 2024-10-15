import { ColumnType } from "../../common/Table/Table.types";
import { User } from "@/api/types/common.types";
import { InfoBadge } from "@/components/common/InfoBadge";
import { InfoBadgeProps } from "@/components/common/InfoBadge/InfoBadge.types";

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
    render: (role: User["role"]) => {
      const colorMap: Record<typeof role, InfoBadgeProps["type"]> = {
        ADMIN: "destructive",
        USER: "info",
      };

      return <InfoBadge type={colorMap[role]}>{role}</InfoBadge>;
    },
  },
  {
    title: "Is verified",
    dataIndex: "isVerified",
    key: "isVerified",
    render: (isVerified: boolean) => {
      const isVerifiedText = isVerified ? "Is verified" : "Not verified";
      const badgeColor = isVerified ? "success" : "destructive";

      return <InfoBadge type={badgeColor}>{isVerifiedText}</InfoBadge>;
    },
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
];
