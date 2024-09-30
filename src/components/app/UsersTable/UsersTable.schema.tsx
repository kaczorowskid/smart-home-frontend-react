import { ColumnType } from "../../common/Table/Table.types";
import { User } from "@/api/types/common.types";
import { RoleBadge } from "./RoleBadge";
import { VerifiedBadge } from "./VerifiedBadge";
import { AdminOnlyWrapper } from "../AdminOnlyWrapper";
import { UserRole } from "@/types/common.types";
import { Trash2 } from "lucide-react";
import { AlertDialog } from "@/components/common/AlertDialog";

export const columns = (
  role: UserRole,
  onDelete: (id: string) => void
): ColumnType<User>[] => {
  const isAdmin = role === "ADMIN";

  return [
    {
      title: "Action",
      dataIndex: "delete",
      key: "delete",
      hidden: !isAdmin,
      render: (_, record) => (
        <AdminOnlyWrapper>
          <AlertDialog
            title="Are you sure?"
            onOk={() => onDelete(record.id)}
            description={`Delete user ${record.email}`}
            trigger={<Trash2 className="cursor-pointer" />}
          />
        </AdminOnlyWrapper>
      ),
    },
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
};
