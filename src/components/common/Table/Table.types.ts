import { Table } from "@/components/ui/table";
import { ComponentProps, ReactNode } from "react";

export type ColumnType<T> = {
  key: string;
  title: string;
  dataIndex: string;
  render?: (value: any, record: T) => ReactNode;
};

export type DataType<T> = {
  onClick?: () => void;
} & T;

export type RowKey = Record<string, any>;

export type TableProps<T> = {
  columns: ColumnType<T>[];
  data: DataType<T>[];
} & ComponentProps<typeof Table>;
