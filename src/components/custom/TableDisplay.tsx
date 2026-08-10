import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import FieldPopUp from "./FieldPopUp";

interface TableDisplayProps {
  headers: string[];
  rows: Record<string, any>[];
  rowKeys: string[];
  addNewField?: () => void;
}

function TableDisplay({
  headers,
  rows,
  rowKeys,
  addNewField,
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
          {addNewField && (
            <TableCell
              colSpan={headers.length}
              className="text-center text-blue-500 font-bold hover:text-blue-700 cursor-pointer"
              onClick={addNewField}
            >
              <FieldPopUp
                header={"Create Field"}
                description={"Type the name of your new field."}
                buttonText={"Add New Field"}
                placeholder={"Field name"}
                onSubmit={function (value: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </TableCell>
          )}
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TableDisplay;
