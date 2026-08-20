import type { ContentfulFieldValidation } from "./Validations";

export interface modelInterface {
  uuid: string;
  entry_name: string;
  last_updated: string;
  created_at: string;
  fields: field[];
}
export interface entriesInterface {
  id: string;
  model_uuid: string;
  model_name: string;
  name: string;
  created_at: string;
  updated_at: string;
  fields: {
    [fieldName: string]: LocalizedField;
  };
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

type LocalizedValue = string | number | boolean;

interface LocalizedField {
  [locale: string]: LocalizedValue | undefined;
}

export interface CreateDialogProps {
  header: string;
  description: string;
  buttonText: string;
  placeholder: string;
  onSubmit: (value: { userInput: string; selectedType: string | null }) => void;
  rows: field[];
}
