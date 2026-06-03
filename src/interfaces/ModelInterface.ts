import type { ContentfulFieldValidation } from "./Validations";

export interface modelInterface {
  uuid: string;
  entryName: string;
  lastUpdated: string;
  created: string;
  fields?: field[];
}

export interface field {
  id: string;
  name: string;
  type: string;
  localized: boolean;
  required: boolean;
  validations?: ContentfulFieldValidation;
  disabled: boolean;
  omitted: boolean;
}


