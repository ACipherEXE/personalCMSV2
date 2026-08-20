import type {
  entriesInterface,
  modelInterface,
} from "../interfaces/ModelInterface";

const SUPABASE_URL = "http://localhost:54321";
/**
 * A API call that gets all the content models from the database.
 * @returns An array of content models.
 */
export const getContentModels = async (): Promise<modelInterface[]> => {
  return fetch(`${SUPABASE_URL}/rest/v1/content_model`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

/**
 * A API call that gets all the content entries from the database.
 * @returns An array of content entries.
 */
export const getContentEntries = async (): Promise<entriesInterface[]> => {
  return fetch(`${SUPABASE_URL}/rest/v1/content_entry`, {
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
  return fetch(`${SUPABASE_URL}/rest/v1/content_model?uuid=eq.${modelUuid}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return result[0];
    });
};

/**
 * A API call that gets a specific content entry from the database.
 * @param entryUuid The UUID of the content entry to retrieve.
 * @returns The content entry if found, otherwise null.
 */
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

/**
 * A API call that checks if a content model exists in the database.
 * @param uuid The UUID of the content model to check.
 * @returns True if the model exists, otherwise false.
 */
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

/**
 * A API call that checks if a content entry exists in the database.
 * @param uuid The UUID of the content entry to check.
 * @returns True if the entry exists, otherwise false.
 */
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

/**
 * A API call that creates a new content model in the database.
 * @param model The content model to create.
 * @returns The created content model.
 */
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

/**
 * A API call that updates an existing content model in the database.
 * @param model The modified content model to update.
 * @returns The updated content model.
 */
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
