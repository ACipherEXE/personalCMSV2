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
import DialogPopUp from "../../custom/DialogPopUp";
import { Button } from "../../ui/button";
import { Link, useNavigate } from "react-router-dom";
import type {
  entriesInterface,
  modelInterface,
} from "../../../interfaces/ModelInterface";
import {
  getContentEntries,
  getContentModels,
} from "../../../API/superBaseAPICalls";
import { useEffect, useState } from "react";
import { formatDate } from "../../../Functions/DateFixes";
import { contentPath } from "../../../paths/content-path";

const currentPage = 1;
const totalPages = 4;
function Contents() {
  const navigate = useNavigate();

  const [models, setModels] = useState<modelInterface[]>([]);
  const [entries, setEntries] = useState<entriesInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      setIsLoading(true);
      const models = (await getContentModels()) || [];
      const entries = (await getContentEntries()) || [];
      console.log("Fetched entries:", entries);
      setModels(models);
      setEntries(entries);
      setIsLoading(false);
    };

    fetchModels();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center w-full">
        <Input placeholder="Search by entry name" className="max-w-sm" />
        <DialogPopUp
          header={"Create Model"}
          description={"Type the name of your new content model."}
          buttonText={"Create"}
          placeholder={"Entry name"}
          onSubmit={async function (entryName: string): Promise<void> {
            console.log("Create model with entry name:", entryName);
            const newModel = await createModel(entryName);
            console.log("New model created:", newModel);
            navigate(`${modelPath.modelEntry}${newModel?.uuid}`);
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Content Type</TableHead>
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
            entries.map((model) => (
              <TableRow key={model.id}>
                <TableCell>
                  <Link
                    to={`${contentPath.contentEntry + model.id}`}
                    className="text-blue-500 font-bold hover:text-blue-700 text-lg"
                  >
                    Test
                  </Link>
                </TableCell>
                <TableCell>{model.name}</TableCell>
                <TableCell>{formatDate(model.created_at)}</TableCell>
                <TableCell>{formatDate(model.updated_at)}</TableCell>
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

export default Contents;
