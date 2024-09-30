import { Table } from "@/components/ui/table";
import { ComponentProps, ReactNode } from "react";

export type ColumnType<T> = {
  key: string;
  title: ReactNode;
  dataIndex: string;
  hidden?: boolean;
  render?: (value: any, record: T) => ReactNode;
};

export type RowKey = Record<string, any>;

export type TableProps<T> = {
  columns: ColumnType<T>[];
  data: T[];
  onRowClick?: (record: T) => void;
} & ComponentProps<typeof Table>;
