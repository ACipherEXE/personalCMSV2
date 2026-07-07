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
import { getContentModels } from "../../../API/superBaseAPICalls";
import { useEffect, useState } from "react";

// const models: modelInterface[] = mockModelData;

console.log("Models.tsx: models:", await getContentModels());

const currentPage = 1;
const totalPages = 4;

function Models() {
  // const models: modelInterface[] = await getContentModels();
  const [models, setModels] = useState<modelInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchModels = async () => {
      setIsLoading(true);
      const models = (await getContentModels()) || [];
      console.log("Models.tsx: fetchModels: models:", models);
      setModels(models);
      setIsLoading(false);
    };

    fetchModels();
  }, []);

  return (
    <div className="space-y-4">
      <Input placeholder="Search by entrry name" className="max-w-sm" />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Model Name</TableHead>
            <TableHead className="text-white">Created</TableHead>
            <TableHead className="text-white">Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : (
            models.map((model) => (
              <TableRow key={model.uuid}>
                <TableCell>
                  <Link
                    to={`${modelPath.modelEntry + model.uuid}`}
                    className="text-blue-500 font-bold hover:text-blue-700 text-lg"
                  >
                    {model.entry_name}
                  </Link>
                </TableCell>
                <TableCell>{model.created_at}</TableCell>
                <TableCell>{model.last_updated}</TableCell>
              </TableRow>
            ))
          )}
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
