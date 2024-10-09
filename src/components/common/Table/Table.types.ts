import { Table } from "@/components/ui/table";
import { ComponentProps, Key, ReactNode } from "react";

export type ColumnType<T> = {
  key: string;
  title: ReactNode;
  dataIndex: keyof T;
  render?: (value: T[keyof T], record: T) => ReactNode;
};

export type TableProps<T> = {
  data: T[];
  columns: ColumnType<T>[];
  rowKey: (record: T) => Key;
  onRowClick?: (record: T) => void;
} & ComponentProps<typeof Table>;
