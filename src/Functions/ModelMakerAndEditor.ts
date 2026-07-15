import { createContentModel, modelExists } from "../API/superBaseAPICalls";
import { mockModelDataSkelington } from "../mockData/ModelSkelingtion";

// Creates a model and adds it to the database. Returns the created model.
export const createModel = async (modelName: string) => {
  // make it a uuid by camelcasing the model name
  const uuid = modelName
    .toLowerCase()
    .replace(/[-_ ]+(.)/g, (_, char) => char.toUpperCase());
  // First check if the model already exists in the database. If it does, throw an error.
  const exists = await modelExists(uuid);
  if (exists) {
    throw new Error(`Model with name ${modelName} already exists.`);
  }
  // If it doesn't, create the model and add it to the database.
  const newModel = {
    ...mockModelDataSkelington,
    entry_name: modelName,
    uuid: uuid,
    created_at: new Date().toISOString(),
    last_updated: new Date().toISOString(),
  };
  return await createContentModel(newModel);
};

export const saveModel = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};
