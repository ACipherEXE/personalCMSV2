import { useEffect } from "react";
import type { field } from "../../interfaces/ModelInterface";
import { Button } from "../ui/button";
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
  rows: field[];
  rowKeys: string[];
  addNewField?: (fieldData: {
    userInput: string;
    selectedType: string | null;
  }) => void;
  removeField?: (fieldName: string) => void;
  dropdownOptions?: string[];
}

function TableDisplay({
  headers,
  rows,
  rowKeys,
  addNewField,
  dropdownOptions = [],
  removeField,
}: TableDisplayProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, i) => (
            <>
              <TableHead key={i} className="text-white">
                {header}
              </TableHead>
            </>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i}>
            {rowKeys.map((key) => (
              <>
                {key === "action" && removeField ? (
                  <TableCell key={key}>
                    <Button
                      type="submit"
                      onClick={() => removeField(rows[i].name)}
                      className="bg-black text-red-500 hover:bg-white/80"
                    >
                      Remove
                    </Button>
                  </TableCell>
                ) : (
                  <TableCell key={key}>{row[key]}</TableCell>
                )}
              </>
            ))}
          </TableRow>
        ))}
        <TableRow>
          {addNewField && (
            <TableCell
              colSpan={headers.length}
              className="text-center text-blue-500 font-bold hover:text-blue-700 cursor-pointer"
            >
              <FieldPopUp
                header={"Create Field"}
                description={"Type the name of your new field."}
                buttonText={"Add New Field"}
                placeholder={"Field name"}
                onSubmit={({ userInput, selectedType }) => {
                  addNewField({ userInput, selectedType });
                }}
                dropdownPlaceholder="Choose a type"
                dropdownOptions={dropdownOptions}
                rows={rows}
              />
            </TableCell>
          )}
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TableDisplay;
