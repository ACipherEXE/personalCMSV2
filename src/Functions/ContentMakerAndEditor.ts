import {
  createContentToAPI,
  getSpecificContentModel,
} from "../API/superBaseAPICalls";
import type { field } from "../interfaces/ModelInterface";
import { mockContentDataSkelington } from "../mockData/ContentSkellington";
import { camelCaseGenerator } from "./StringFixes";

/**
 * CREATE
 */
export const createContent = async (
  contentName: string,
  modelStructureName: string,
) => {
  // get the stucture of the model
  const uuid = camelCaseGenerator(modelStructureName.toLowerCase());
  const model = await getSpecificContentModel(uuid);

  // TODO: USER DEFINE THE DEFAULT LANG
  function fieldStructureGenerator(
    modelFieldStucture: field[] | null | undefined,
  ) {
    const fields: Record<string, { en_US: string }> = {};
    if (!modelFieldStucture) return;
    for (const field of modelFieldStucture) {
      fields[field.id] = { en_US: "" };
    }

    return { fields };
  }

  // Set up the new Content
  const newModel = {
    model_uuid: uuid,
    model_name: modelStructureName,
    name: contentName,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    fields: fieldStructureGenerator(model?.fields ?? []) ?? {},
  };
  try {
    return await createContentToAPI(newModel);
  } catch (error) {
    return newModel;
  }
};
