import type { ContentfulFieldValidation } from "./Validations";

export interface modelInterface {
  uuid: string;
  entry_name: string;
  last_updated: string;
  created_at: string;
  fields?: field[];
}

export interface field {
  id: string;
  name: string;
  type: string;
  localized: boolean;
  required: boolean;
  validations?: ContentfulFieldValidation[];
  disabled: boolean;
  omitted: boolean;
  items?: {
    type: string;
    validations?: ContentfulFieldValidation[];
    linkType?: string;
  };
}
