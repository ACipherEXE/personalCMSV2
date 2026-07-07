import type { modelInterface } from "../interfaces/ModelInterface";

export const getContentModels = async (): Promise<modelInterface[]> => {
  return fetch("http://localhost:54321/rest/v1/content_model", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};
