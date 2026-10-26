import { Field } from "../components/ui/field";
import type {
  contentInterface,
  modelInterface,
} from "../interfaces/ModelInterface";
const MIDDLE_API = "https://localhost:7046/api/PersonalCMSV2";

/**
 * A API call that gets all the content models from the database.
 * @returns An array of content models.
 */
export const getContentModels = async (): Promise<modelInterface[]> => {
  return fetch(`${MIDDLE_API}/models`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

/**
 * A API call that gets a specific content model from the database.
 * @param modelUuid The UUID of the content model to retrieve.
 * @returns The content model if found, otherwise null.
 */
export const getSpecificContentModel = async (
  modelUuid: string,
): Promise<modelInterface | null> => {
  return fetch(`${MIDDLE_API}/model/${modelUuid}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

export const addNewFieldToSpecificContentModel = async (
  modelUuid: string,
  FieldName: string,
  FieldType: string,
): Promise<modelInterface | null> => {
  const response = await fetch(`${MIDDLE_API}/model/field/${modelUuid}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      FieldName: FieldName,
      FieldType: FieldType,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to edit model: ${response.statusText}`);
  }

  const result = await response.json();
  return result[0];
};
