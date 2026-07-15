import type { modelInterface } from "../interfaces/ModelInterface";

export const mockModelDataSkelington: modelInterface = {
  uuid: "",
  entry_name: "",
  last_updated: "",
  created_at: "",
  fields: [
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          unique: true,
        },
      ],
      disabled: false,
      omitted: false,
    },
  ],
};
