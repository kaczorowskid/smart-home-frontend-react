import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableProps } from "./Table.types";

export const Table = <T,>({
  columns,
  data,
  rowKey,
  onRowClick,
  ...props
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <ShadcnTable className="w-max min-w-full table-auto" {...props}>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead className="text-center" key={col.key}>
                {col.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((record) => (
            <TableRow key={rowKey(record)} onClick={() => onRowClick?.(record)}>
              {columns.map((col) => (
                <TableCell className="text-center" key={col.key}>
                  {col.render?.(record[col.dataIndex], record) ||
                    String(record[col.dataIndex])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </ShadcnTable>
    </div>
  );
};
