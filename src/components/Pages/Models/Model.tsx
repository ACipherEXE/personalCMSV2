import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../../custom/SideBar";
import { Button } from "../../ui/button";
import { modelPath } from "../../../paths/model-paths";
import { useEffect, useState } from "react";
import type { modelInterface } from "../../../interfaces/ModelInterface";
import TableDisplay from "../../custom/TableDisplay";
import { getSpecificContentModel } from "../../../API/superBaseAPICalls";
import JSONDisplay from "../../custom/JSONDisplay";

/**
 * This is used to edit, read and add functions to models. Think of this area as a blueprint editor.
 * @returns The model page
 */
function Model() {
  const sidebarItems = ["Model", "JSON structure"];
  const [modelStructure, setModelStructure] = useState<modelInterface | null>(
    null,
  );
  const [selectedSidebarItem, setSelectedSidebarItem] = useState<string | null>(
    sidebarItems[0],
  );
  const handleSidebarClick = (item: string) => {
    setSelectedSidebarItem(item);
  };
  const [isLoading, setIsLoading] = useState(true);

  const { modelId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpecificModels = async () => {
      if (!modelId) return;
      setIsLoading(true);
      const model = (await getSpecificContentModel(modelId)) || null;
      setModelStructure(model || null);
      setIsLoading(false);
    };

    fetchSpecificModels();
  }, [modelId]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 p-4 border-b border-gray-700">
        <Button
          variant="ghost"
          onClick={() => navigate(modelPath.model)}
          className="text-white"
        >
          ← Back
        </Button>
        <h1 className="text-white text-xl font-semibold">
          {modelStructure?.entry_name ?? "Loading..."}
        </h1>
      </div>

      <div className="flex flex-1">
        {!isLoading && (
          <SideBar
            sidebarItems={sidebarItems}
            onItemClick={handleSidebarClick}
          />
        )}
        <main className="flex-1 p-4">
          {isLoading ? (
            <div className="text-white text-center">Loading...</div>
          ) : !modelStructure ? (
            <div className="text-white text-center">Model not found</div>
          ) : (
            <>
              {selectedSidebarItem === sidebarItems[0] &&
                modelStructure?.fields && (
                  <TableDisplay
                    headers={["Content", "Type"]}
                    rows={modelStructure.fields}
                    rowKeys={["name", "type"]}
                  />
                )}
              {selectedSidebarItem === sidebarItems[1] &&
                modelStructure?.fields && (
                  <JSONDisplay rawJSON={modelStructure} />
                )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Model;
