import type { field } from "./ModelInterface";

export interface FeldPopUpOutput {
  userInput: string;
  selectedType: string | null;
}
export interface FeldPopUpInterface {
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
