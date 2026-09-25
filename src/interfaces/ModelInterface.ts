import type { ContentfulFieldValidation } from "./Validations";

export interface modelInterface {
  uuid: string;
  entry_name: string;
  last_updated: string;
  created_at: string;
  fields: field[];
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

export interface contentInterface {
  id?: string;
  model_uuid?: string;
  model_name: string;
  name: string;
  created_at: string;
  updated_at: string;
  fields: contentFieldsInterface;
}

export interface contentFieldsInterface {
  [fieldName: string]: LocalizedField;
}

type LocalizedValue = string | number | boolean;

export interface LocalizedField {
  [locale: string]: LocalizedValue | undefined;
}

export interface CreateDialogProps {
  /**header of the pop up */
  header: string;
  /**Description of what is the goal of the popup */
  description: string;
  /** Button text you want to display */
  buttonText: string;
  /** The placeholder text you want to add to the textbox when empty */
  placeholder: string;
  /**
   * Will return the input of the user. Use this to handle logic wanted after.
   * @param output - A array of user inputs
   * @param output.userInput - A string that contains textbox input.
   * @param output.selectedType - A string that contains the chosen dropdown item.
   */
  onSubmit: (output: { userInput: string; selectedType: string }) => void;
  /**
   * A optional check to make sure you dont have duplicates in the names of you model. Used in the model page.
   */
  rowCheck?: field[];
  /**
   *  A optional input, used to display to the user text on the button that will trigger the dropdown.
   */
  dropdownPlaceholder?: string;
  /**
   *  A optional input that will trigger the display of dropdown. Pass a string array and it will display the list in the dropdown.
   *  @example
   *  <
   */
  dropdownOptions?: string[];
}
