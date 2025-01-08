import { type Table } from "@/components/ui/table";
import { type Key, type ReactNode, type ComponentProps } from "react";

export type TableProps<T> = ComponentProps<typeof Table> & {
  data: T[];
  columns: ColumnType<T>[];
  rowKey: (record: T) => Key;
  onRowClick?: (record: T) => void;
};

export type ColumnType<T> = {
  key: string;
  width?: number;
  title: ReactNode;
  dataIndex: keyof T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, record: T) => ReactNode;
};
