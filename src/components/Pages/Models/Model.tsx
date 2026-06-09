import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Input } from "../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";


function Model() {
  
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Content</TableHead>
            <TableHead className="text-white">Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
              <TableCell>
                test
              </TableCell>
              <TableCell>test</TableCell>
            </TableRow>
        </TableBody>
        
      </Table>
    </div>
  );
}

export default Model;
