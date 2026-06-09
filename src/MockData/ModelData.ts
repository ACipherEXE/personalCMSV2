import type { modelInterface } from "../interfaces/ModelInterface";

export const mockModelData: modelInterface[] = [
  {
    uuid: "tokenContainer",
    entryName: "Token Container",
    lastUpdated: "May 28, 2026",
    created: "May 28, 2026",
  },
  {
    uuid: "localizationToken",
    entryName: "Localization Token",
    lastUpdated: "May 28, 2026",
    created: "May 28, 2026",
  }
];

export const mockModelContent_TokenContainer: modelInterface = {
  uuid: "tokenContainer",
  entryName: "Token Container",
  lastUpdated: "May 28, 2026",
  created: "May 28, 2026",
  fields: [
    {
      id: "title",
      name: "title",
      type: "shortText",
      localized: false,
      required: false,
      disabled: false,
      omitted: false,
    },
    {
      id: "slug",
      name: "slug",
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
    }
  ],
};

export const mockModelContent_localizationToken: modelInterface = {
  uuid: "localizationToken",
  entryName: "Localization Token",
  lastUpdated: "May 28, 2026",
  created: "May 28, 2026",
  fields: [
    {
      "id": "key",
      "name": "Key",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [
        {
          "unique": true
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "value",
      "name": "Value",
      "type": "Text",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ],
};
