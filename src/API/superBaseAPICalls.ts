import type { modelInterface } from "../interfaces/ModelInterface";

const SUPABASE_URL = "http://localhost:54321";
export const getContentModels = async (): Promise<modelInterface[]> => {
  return fetch(`${SUPABASE_URL}/rest/v1/content_model`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

export const getSpecificContentModel = async (
  modelUuid: string,
): Promise<modelInterface | null> => {
  return fetch(`${SUPABASE_URL}/rest/v1/content_model?uuid=eq.${modelUuid}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return result[0];
    });
};

export const modelExists = async (uuid: string): Promise<boolean> => {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/content_model?uuid=eq.${uuid}&select=uuid`,
    {
      method: "GET",
    },
  );

  const result = await response.json();
  return result.length > 0;
};
