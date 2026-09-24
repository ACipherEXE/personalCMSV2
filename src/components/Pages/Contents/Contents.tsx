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
import { Link, useNavigate } from "react-router-dom";
import {
  getContentEntries,
  getContentModels,
} from "../../../API/superBaseAPICalls";
import { useEffect, useState } from "react";
import { formatDate } from "../../../Functions/DateFixes";
import { contentPath } from "../../../paths/content-path";
import FieldPopUp from "../../custom/FieldPopUp";
import type { FeldPopUpOutput } from "../../../interfaces/FieldPopUpInterface";
import type { contentInterface } from "../../../interfaces/ModelInterface";
import { createContent } from "../../../Functions/ContentMakerAndEditor";
import { modelPath } from "../../../paths/model-paths";

const currentPage = 1;
const totalPages = 4;
function Contents() {
  const navigate = useNavigate();

  const [modelList, setModelList] = useState<string[]>([]);
  const [entries, setEntries] = useState<contentInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      setIsLoading(true);
      const models = (await getContentModels()) || [];
      const entries = (await getContentEntries()) || [];
      setModelList(models.map((model) => model.entry_name));
      setEntries(entries);
      setIsLoading(false);
    };

    fetchModels();
  }, []);

  /**
   * Will tell the api to make a new model. But if the model has already been made it will throw a error.
   * If not it will navigate to the Model page so the user can modify its structure for its use in entries.
   * @param output - uses the output of FieldPopUp to name the new Model.
   */
  async function createNewContent(output: FeldPopUpOutput): Promise<void> {
    console.log("Create content with name:", output);
    const newContent = await createContent(
      output.userInput,
      output.selectedType ?? "",
    );
    console.log("newContent", newContent);
    navigate(`${contentPath.contentEntry}${newContent?.id}`);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center w-full">
        <Input placeholder="Search by entry name" className="max-w-sm" />
        <FieldPopUp
          header={"Create Model"}
          description={
            "Type a name for your new content and choose a model type."
          }
          buttonText={"Create"}
          placeholder={"Name the new content"}
          dropdownPlaceholder={"Choose a Model for the new Content"}
          dropdownOptions={modelList}
          onSubmit={(output) => createNewContent(output)}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Model Type</TableHead>
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
            <>
              {entries.length > 0 ? (
                <>
                  {entries.map((entrie) => (
                    <TableRow key={entrie.id}>
                      <TableCell>
                        <Link
                          to={`${contentPath.contentEntry + entrie.id}`}
                          className="text-blue-500 font-bold hover:text-blue-700 text-lg"
                        >
                          {entrie.name}
                        </Link>
                      </TableCell>
                      <TableCell>{entrie.model_name}</TableCell>
                      <TableCell>{formatDate(entrie.created_at)}</TableCell>
                      <TableCell>{formatDate(entrie.updated_at)}</TableCell>
                    </TableRow>
                  ))}
                </>
              ) : (
                <>
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">
                      No Models / Something went wrong
                    </TableCell>
                  </TableRow>
                </>
              )}
            </>
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
