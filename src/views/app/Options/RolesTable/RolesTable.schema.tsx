import { Badge } from "@/components/ui/badge";
import { FormattedMessage } from "react-intl";
import { type Role } from "@/api/types/common.types";
import { type ColumnType } from "@/components/common/Table/Table.types";

export const columns: ColumnType<Role>[] = [
  {
    key: "id",
    dataIndex: "id",
    title: <FormattedMessage id="table.id" />,
  },
  {
    key: "name",
    dataIndex: "name",
    title: <FormattedMessage id="table.name" />,
    render: (name: Role["name"]) => <Badge>{name}</Badge>,
  },
  {
    width: 700,
    key: "permissions",
    dataIndex: "permissions",
    title: <FormattedMessage id="table.permissions" />,
    render: (permissions: Role["permissions"]) => (
      <div className="flex flex-wrap gap-2">
        {permissions.map(({ permission }) => (
          <Badge key={permission} variant="outline">
            {permission}
          </Badge>
        ))}
      </div>
    ),
  },
];
