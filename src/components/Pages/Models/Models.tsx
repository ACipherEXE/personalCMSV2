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

import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { modelPath } from "../../../paths/model-paths";
import type { modelInterface } from "../../../interfaces/ModelInterface";
import { mockModelData } from "../../../MockData/ModelData";

const models: modelInterface[] = mockModelData;

const currentPage = 1;
const totalPages = 4;

function Models() {
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
                  to={`${modelPath.modelEntry + model.uuid}`}
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

export default Models;
