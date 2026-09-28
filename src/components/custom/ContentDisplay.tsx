import { useEffect, useState } from "react";
import type {
  contentFieldsInterface,
  field,
  LocalizedField,
} from "../../interfaces/ModelInterface";
import { Input } from "../ui/input";
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
  rows: field[];
  rowsContent: {
    [fieldName: string]: LocalizedField;
  };
  rowKeys: string[];
  modifiedContent: (output: contentFieldsInterface) => void;
}

function ContentDisplay({
  headers,
  rows,
  rowKeys,
  rowsContent,
  modifiedContent,
}: TableDisplayProps) {
  const [rowContentData, setRowContentData] = useState(rowsContent);

  const updateField = (fieldName: string, locale: string, newValue: string) => {
    if (!locale) return;
    setRowContentData((prev) => ({
      ...prev,
      [fieldName]: {
        [locale]: newValue,
      },
    }));
  };

  useEffect(() => {
    // Send back the latest to content every change!
    modifiedContent(rowContentData);
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
              placeholder={"Empty"}
              defaultValue={rowContentData[row.id]?.en_US?.toString() || ""}
              onChange={(e) => {
                updateField(row.name, "en_US", e.target.value);
              }}
            />
          </>
        ))}
      </TableBody>
    </Table>
  );
}

export default ContentDisplay;
