import { ArrowLeftIcon, ArrowRightIcon, Badge } from "lucide-react";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

interface Entry {
  studentid: string;
  is_late: boolean;
  time: string;
  date: string;
}

const entries: Entry[] = [
  {
    studentid: "STU001",
    is_late: false,
    time: "8:02 AM",
    date: "May 28, 2026",
  },
  { studentid: "STU002", is_late: true, time: "9:15 AM", date: "May 28, 2026" },
  {
    studentid: "STU003",
    is_late: false,
    time: "7:58 AM",
    date: "May 27, 2026",
  },
  {
    studentid: "STU004",
    is_late: true,
    time: "10:03 AM",
    date: "May 27, 2026",
  },
  {
    studentid: "STU005",
    is_late: false,
    time: "8:30 AM",
    date: "May 26, 2026",
  },
];

const currentPage = 1;
const totalPages = 4;

function Models() {
  return (
    <div className="p-4 space-y-4">
      {/* Search */}
      <Input placeholder="EX: STU001" className="max-w-sm" />

      {/* Table */}
      <Table>
        <TableCaption>A list of student entries</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Student ID</TableHead>
            <TableHead>Is Late</TableHead>
            <TableHead>Time</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.studentid}>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                    >
                      {entry.studentid}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="cursor-pointer">
                        Student Info
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Entries
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell>yes</TableCell>
              <TableCell>{entry.time}</TableCell>
              <TableCell className="text-right">{entry.date}</TableCell>
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

export default Models;
