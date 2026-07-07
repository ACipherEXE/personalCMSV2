import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../../custom/SideBar";
import { Button } from "../../ui/button";
import { modelPath } from "../../../paths/model-paths";
import {
  mockModelContent_TokenContainer,
  mockModelContent_localizationToken,
} from "../../../MockData/ModelData";
import { useEffect, useState } from "react";
import type { modelInterface } from "../../../interfaces/ModelInterface";
import TableDisplay from "../../custom/TableDisplay";

function Model() {
  const sidebarItems = ["Model", "JSON structure"];
  const [modelStructure, setModelStructure] = useState<modelInterface | null>(
    null,
  );
  const handleSidebarClick = (item: string) => {
    console.log(item);
  };
  const { modelId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (modelId === mockModelContent_TokenContainer.uuid) {
      setModelStructure(mockModelContent_TokenContainer);
    } else if (modelId === mockModelContent_localizationToken.uuid) {
      setModelStructure(mockModelContent_localizationToken);
    }
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
        <SideBar sidebarItems={sidebarItems} onItemClick={handleSidebarClick} />
        <main className="flex-1 p-4">
          {modelStructure?.fields && (
            <TableDisplay
              headers={["Content", "Type"]}
              rows={modelStructure.fields}
              rowKeys={["name", "type"]}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default Model;
