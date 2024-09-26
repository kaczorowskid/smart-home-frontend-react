import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RowKey, TableProps } from "./Table.types";

export const Table = <T extends RowKey>({
  columns,
  data,
  ...props
}: TableProps<T>) => {
  return (
    <ShadcnTable {...props}>
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
        {data.map((record, rowIndex) => (
          <TableRow key={rowIndex} onClick={record.onClick}>
            {columns.map((col) => (
              <TableCell className="text-center" key={col.key}>
                {col.render
                  ? col.render(record[col.dataIndex], record)
                  : record[col.dataIndex]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </ShadcnTable>
  );
};
