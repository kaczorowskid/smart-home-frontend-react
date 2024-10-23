import { ColumnType } from "../../common/Table/Table.types";
import { Room } from "@/api/types/common.types";

export const columns: ColumnType<Room>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Thermometer",
    dataIndex: "thermometers",
    key: "thermometers",
    render: (val) => val?.length || "-",
  },
  {
    title: "Blind",
    dataIndex: "blinds",
    key: "blinds",
    render: (val) => val?.length || "-",
  },
];
