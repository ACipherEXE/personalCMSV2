import { useEffect, useState } from "react";
import type { field, LocalizedField } from "../../interfaces/ModelInterface";
import { Input } from "../ui/input";
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
  rowsContent: {
    [fieldName: string]: LocalizedField;
  };
  rowKeys: string[];
  addNewField?: (fieldData: {
    userInput: string;
    selectedType: string | null;
  }) => void;
}

function ContentDisplay({
  headers,
  rows,
  rowKeys,
  rowsContent,
  addNewField,
}: TableDisplayProps) {
  // console.log("rowsContent", rowsContent.fields["Test"]);
  const [rowContentData, setRowContentData] = useState(rowsContent);

  const updateField = (fieldName, locale, newValue) => {
    console.log("fieldName", fieldName);

    setRowContentData((prev) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [fieldName]: {
          [locale]: newValue,
        },
      },
    }));
  };

  useEffect(() => {
    console.log(rowContentData);
  }, [rowContentData]);
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
          <>
            <TableRow key={i}>
              {rowKeys.map((key) => (
                <>
                  <TableCell key={key}>{row[key]}</TableCell>
                </>
              ))}
            </TableRow>
            <Input
              className="bg-black text-white border-white/20 placeholder:text-white/40 focus-visible:ring-white/40"
              placeholder={"placeholder"}
              defaultValue={rowContentData[row.name]?.en_US?.toString() || ""}
              onChange={(e) => {
                console.log(rowsContent);
                updateField(row.name, "en_US", e.target.value);
              }}
            />
          </>
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
                rows={rows}
              />
            </TableCell>
          )}
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default ContentDisplay;
