import { useEffect, useState } from "react";
import {
  getSpecificContentEntry,
  getSpecificContentModel,
} from "../../../API/superBaseAPICalls";
import type {
  contentInterface,
  modelInterface,
} from "../../../interfaces/ModelInterface";
import SideBar from "../../custom/SideBar";
import { Button } from "../../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import JSONDisplay from "../../custom/JSONDisplay";
import ContentDisplay from "../../custom/ContentDisplay";
import { contentPath } from "../../../paths/content-path";

function Content() {
  const { entryId } = useParams();
  // const entryId = "13beba48-4da1-4f0a-85da-2416c8fbb94b";
  const [modelStructure, setModelStructure] = useState<modelInterface | null>(
    null,
  );
  const [entryStructure, setEntryStructure] = useState<contentInterface | null>(
    null,
  );
  const sidebarItems = ["Model", "JSON structure"];
  const [selectedSidebarItem, setSelectedSidebarItem] = useState<string | null>(
    sidebarItems[0],
  );
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleSidebarClick = (item: string) => {
    setSelectedSidebarItem(item);
  };
  useEffect(() => {
    const fetchSpecificModels = async () => {
      if (!entryId) return;
      const entry = (await getSpecificContentEntry(entryId)) || null;
      if (!entry?.model_uuid) return;
      const model = (await getSpecificContentModel(entry?.model_uuid)) || null;
      console.log("model", model);
      console.log("entrie", entry);
      setModelStructure(model || null);
      setEntryStructure(entry || null);
      setIsLoading(false);
    };
    fetchSpecificModels();
  }, [entryId]);
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 p-4 border-b border-gray-700">
        <Button
          variant="ghost"
          onClick={() => navigate(contentPath.content)}
          className="text-white"
        >
          ← Back
        </Button>
        <h1 className="text-white text-xl font-semibold">
          {entryStructure?.name ?? "Loading..."}
        </h1>
      </div>

      <div className="flex flex-1">
        {!isLoading && (
          <SideBar
            sidebarItems={sidebarItems}
            onItemClick={handleSidebarClick}
            buttonText="Publish"
            onButtonClick={() => {
              console.log("YEO");
            }}
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
                  <ContentDisplay
                    headers={["Name"]}
                    rows={modelStructure.fields}
                    rowsContent={entryStructure?.fields || {}}
                    rowKeys={["name"]}
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

export default Content;
