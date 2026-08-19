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

export const getContentEntries = async (): Promise<modelInterface[]> => {
  return fetch(`${SUPABASE_URL}/rest/v1/content_entry`, {
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

export const getSpecificContentEntry = async (
  entryUuid: string,
): Promise<modelInterface | null> => {
  return fetch(`${SUPABASE_URL}/rest/v1/content_entry?uuid=eq.${entryUuid}`, {
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

export const entryExists = async (uuid: string): Promise<boolean> => {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/content_entry?uuid=eq.${uuid}&select=uuid`,
    {
      method: "GET",
    },
  );

  const result = await response.json();
  return result.length > 0;
};

export const createContentModel = async (model: modelInterface) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/content_model`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(model),
  });

  if (!response.ok) {
    throw new Error(`Failed to create model: ${response.statusText}`);
  }

  const result = await response.json();
  return result[0];
};

export const updateContentModel = async (model: modelInterface) => {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/content_model?uuid=eq.${model.uuid}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        fields: model.fields,
        entry_name: model.entry_name,
        last_updated: model.last_updated,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to edit model: ${response.statusText}`);
  }

  const result = await response.json();
  return result[0];
};
