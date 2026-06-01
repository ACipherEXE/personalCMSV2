import { ArrowLeftIcon, ArrowRightIcon, Badge } from "lucide-react";
import { Input } from "../../ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

interface ModelInterface {
  uuid: string;
  entryName: string;
  lastUpdated: string;
  created: string;
}

const models: ModelInterface[] = [
  {
    uuid: "STU001",
    entryName: "false1",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
  {
    uuid: "STU002",
    entryName: "false2",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
  {
    uuid: "STU003",
    entryName: "false3",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
  {
    uuid: "STU004",
    entryName: "false4",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
  {
    uuid: "STU005",
    entryName: "false5",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
];

const currentPage = 1;
const totalPages = 4;

function Model() {
  return (
    <div className="space-y-4">
      <Input placeholder="Search by entrry name" className="max-w-sm" />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Model Name</TableHead>
            <TableHead className="text-white">created</TableHead>
            <TableHead className="text-white">Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.uuid}>
              <TableCell>
                <Link
                  to={`/models/model/${model.uuid}`}
                  className="text-blue-500 font-bold hover:text-blue-700 text-lg"
                >
                  {model.entryName}
                </Link>
              </TableCell>
              <TableCell>{model.created}</TableCell>
              <TableCell>{model.lastUpdated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Page</TableCell>
            <TableCell className="text-right">
              {currentPage} / {totalPages}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Pagination */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          size="icon"
          aria-label="Previous page"
          disabled
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Next page">
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Model;
