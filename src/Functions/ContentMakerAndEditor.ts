import { getSpecificContentModel } from "../API/superBaseAPICalls";
import { Field } from "../components/ui/field";
import { mockContentDataSkelington } from "../mockData/ContentSkellington";
import { camelCaseGenerator } from "./StringFixes";

/**
 * CREATE
 */
export const createEntry = async (
  contentName: string,
  modelStructureName: string,
) => {
  // get the stucture of the model
  const uuid = camelCaseGenerator(modelStructureName);
  const model = await getSpecificContentModel(uuid);
  function fieldStructureGenerator(modelFieldStucture) {
    throw new Error("Function not implemented.");
  }

  // Set up the new Content
  const newModel = {
    ...mockContentDataSkelington,
    model_uuid: model?.uuid,
    model_name: modelStructureName,
    name: contentName,
    field: fieldStructureGenerator(model?.fields),
  };
  console.log("newModel", newModel);
  //   return await createContentModel(newModel);
  return;
};
