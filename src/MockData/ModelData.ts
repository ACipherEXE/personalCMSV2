import type { modelInterface } from "../interfaces/ModelInterface";

// Outdated mock data for testing purposes. This should be replaced with actual API calls in production.
export const mockModelData: modelInterface[] = [
  {
    uuid: "tokenContainer",
    entry_name: "Token Container",
    last_updated: "May 28, 2026",
    created_at: "May 28, 2026",
  },
  {
    uuid: "localizationToken",
    entry_name: "Localization Token",
    last_updated: "May 28, 2026",
    created_at: "May 28, 2026",
  },
];

export const mockModelContent_TokenContainer: modelInterface = {
  uuid: "tokenContainer",
  entry_name: "Token Container",
  last_updated: "May 28, 2026",
  created_at: "May 28, 2026",
  fields: [
    {
      id: "title",
      name: "Title",
      type: "shortText",
      localized: false,
      required: false,
      disabled: false,
      omitted: false,
    },
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
    {
      id: "tokens",
      name: "Tokens",
      type: "Array",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["localizationToken"],
          },
        ],
        linkType: "Entry",
      },
    },
  ],
};

export const mockModelContent_localizationToken: modelInterface = {
  uuid: "localizationToken",
  entry_name: "Localization Token",
  last_updated: "May 28, 2026",
  created_at: "May 28, 2026",
  fields: [
    {
      id: "key",
      name: "Key",
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
    {
      id: "value",
      name: "Value",
      type: "Text",
      localized: true,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
};
