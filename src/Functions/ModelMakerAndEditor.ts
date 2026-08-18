import { createContentModel, modelExists } from "../API/superBaseAPICalls";
import type { modelInterface } from "../interfaces/ModelInterface";
import { mockModelDataSkelington } from "../mockData/ModelSkelingtion";

/**
 * CREATE
 */
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

/**
 * EDIT
 */
// export const editModel = async (
//   modelName: string,
//   updatedData: modelInterface,
// ) => {
//   // make it a uuid by camelcasing the model name
//   const uuid = modelName
//     .toLowerCase()
//     .replace(/[-_ ]+(.)/g, (_, char) => char.toUpperCase());
//   // First check if the model already exists in the database. If it does, throw an error.
//   const exists = await modelExists(uuid);
//   if (exists) {
//     throw new Error(`Model with name ${modelName} already exists.`);
//   }
//   // If it doesn't, create the model and add it to the database.
//   const newModel = {
//     ...updatedData,
//     entry_name: updatedData.entry_name,
//     uuid: updatedData.uuid,
//     created_at: updatedData.created_at,
//     last_updated: new Date().toISOString(),
//   };
//   return await createContentModel(newModel);
// };

/**
 * UPDATE
 */
export const updateModel = async (updatedData: modelInterface) => {
  // find the model in the database by uuid
  const exists = await modelExists(updatedData.uuid);

  // If it does, update the model in the database.
  if (exists) {
    const updatedModel = {
      ...updatedData,
      entry_name: updatedData.entry_name,
      uuid: updatedData.uuid,
    };
    return await createContentModel(updatedModel);
  }
  // If it doesn't, throw an error.
  throw new Error(`Model with uuid ${updatedData.uuid} does not exist.`);
};

/**
 * DELETE
 */
