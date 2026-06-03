import type { modelInterface } from "../interfaces/ModelInterface";

export const mockModelData: modelInterface[] = [
  {
    uuid: "STU001",
    entryName: "Token Container",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
  {
    uuid: "STU002",
    entryName: "Localization Token",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
  {
    uuid: "STU003",
    entryName: "Sites: page",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
  {
    uuid: "STU004",
    entryName: "Component: Dropdown",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
  {
    uuid: "STU005",
    entryName: "Sites: Product",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
  },
];

export const mockModelContent: modelInterface = 
  {
    uuid: "STU001",
    entryName: "Token Container",
    lastUpdated: "8:02 AM",
    created: "May 28, 2026",
    fields: [
      {
        id: "textBox",
        name: "Text Box",
        type: "string",
        localized: false,
        required: false,
        disabled: false,
        omitted: false,
      },
      {
        id: "buttonText",
        name: "Button",
        type: "string",
        localized: false,
        required: false,
        disabled: false,
        omitted: false,
      },
    ],
  }

