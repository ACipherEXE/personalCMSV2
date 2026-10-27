import { Field } from "../components/ui/field";
import type {
  contentInterface,
  modelInterface,
} from "../interfaces/ModelInterface";
const MIDDLE_API = "https://localhost:7046/api/PersonalCMSV2";

// This is powered with the personalCMSV2_NET_API repo

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
 * @param modelUuid The modelUuid of the content model to retrieve.
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

/**
 * A API call that adds a new field to an existing content model in the database.
 * @param modelUuid The modelUuid of the model.
 * @param FieldName The desired name of the field.
 * @param FieldType The desired type of the field.
 * @returns The updated content model with the new field.
 */
export const addFieldToContentModel = async (
  modelUuid: string,
  FieldName: string,
  FieldType: string,
): Promise<modelInterface | null> => {
  const response = await fetch(`${MIDDLE_API}/model/field/${modelUuid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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
  return result;
};

/**
 * A API call that adds a new field to an existing content model in the database.
 * @param modelUuid The modelUuid of the model.
 * @param FieldName The desired name of the field you want to remove.
 * @returns The updated content model with the new field.
 */
export const removeFieldFromContentModel = async (
  modelUuid: string,
  FieldName: string,
): Promise<modelInterface | null> => {
  const response = await fetch(`${MIDDLE_API}/model/field/${modelUuid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      FieldName: FieldName,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to edit model: ${response.statusText}`);
  }

  const result = await response.json();
  return result;
};
