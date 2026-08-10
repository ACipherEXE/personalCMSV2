import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface TableDisplayProps {
  headers: string[];
  rows: Record<string, any>[];
  rowKeys: string[];
  AddNewField?: () => void;
}

function TableDisplay({
  headers,
  rows,
  rowKeys,
  AddNewField,
}: TableDisplayProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, i) => (
            <TableHead key={i} className="text-white">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i}>
            {rowKeys.map((key) => (
              <TableCell key={key}>{row[key]}</TableCell>
            ))}
          </TableRow>
        ))}
        <TableRow>
          <TableCell
            colSpan={headers.length}
            className="text-center text-blue-500 font-bold hover:text-blue-700 cursor-pointer"
            onClick={AddNewField}
          >
            + Add new field
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TableDisplay;
