import {
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  Table as ShadcnTable,
} from "@/components/ui/table";
import { type TableProps } from "./Table.types";

export const Table = <T,>({
  data,
  rowKey,
  columns,
  onRowClick,
  ...props
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <ShadcnTable className="w-max min-w-full table-auto" {...props}>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col.key} className="text-center">
                {col.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((record) => (
            <TableRow key={rowKey(record)} onClick={() => onRowClick?.(record)}>
              {columns.map((col) => (
                <TableCell
                  key={col.key}
                  width={col.width}
                  className="text-center"
                >
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
