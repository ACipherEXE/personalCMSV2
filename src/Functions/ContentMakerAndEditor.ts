import { getSpecificContentModel } from "../API/superBaseAPICalls";
import type { field } from "../interfaces/ModelInterface";
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
  const model = (await getSpecificContentModel(uuid)) || null;
  function fieldStructureGenerator(modelFieldStucture: field[] | null) {
    if (modelFieldStucture) {
      console.log("modelFieldStucture", modelFieldStucture);
    }
    return {
      sample: {
        en_us: "",
      },
    };
  }

  // Set up the new Content
  const newModel = {
    ...mockContentDataSkelington,
    model_uuid: model?.uuid,
    model_name: modelStructureName,
    name: contentName,
    field: fieldStructureGenerator(model?.fields ?? null),
  };
  console.log("newModel", newModel);
  //   return await createContentModel(newModel);
  return;
};
