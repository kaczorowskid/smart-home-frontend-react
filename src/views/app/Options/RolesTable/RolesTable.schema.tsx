import { ColumnType } from "@/components/common/Table/Table.types";
import { Role } from "@/api/types/common.types";
import { Badge } from "@/components/ui/badge";
import { FormattedMessage } from "react-intl";

export const columns: ColumnType<Role>[] = [
  {
    title: <FormattedMessage id="table.id" />,
    dataIndex: "id",
    key: "id",
  },
  {
    title: <FormattedMessage id="table.name" />,
    dataIndex: "name",
    key: "name",
    render: (name: Role["name"]) => <Badge>{name}</Badge>,
  },
  {
    title: <FormattedMessage id="table.permissions" />,
    dataIndex: "permissions",
    key: "permissions",
    width: 700,
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
