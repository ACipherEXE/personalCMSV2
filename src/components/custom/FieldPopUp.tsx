import { useState } from "react";
import type { field } from "../../interfaces/ModelInterface";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type { FeldPopUpInterface } from "../../interfaces/FieldPopUpInterface";

function FieldPopUp({
  header = "header",
  description = "description",
  buttonText = "Button",
  placeholder = "Placeholder",
  rowCheck = [],
  dropdownPlaceholder = null,
  dropdownOptions = [],
  onSubmit,
}: FeldPopUpInterface) {
  // The user input in the text box
  const [userInput, setUserInput] = useState("");
  // The selected input of the user from the drop down. If nothing is selected a error ill occur.
  const [selectedType, setSelectedType] = useState<string | null>(null);
  // Is the popup open or closed
  const [open, setOpen] = useState(false);
  // Error state
  const [error, setError] = useState<boolean>(false);

  // Last check before passing the input back.
  const handleSubmit = () => {
    // Validate user input and selected type
    if (!userInput.trim() || (dropdownOptions.length > 0 && !selectedType)) {
      setError(true);
      return;
    }
    // Check if the userInput already exists in the rows array
    if (
      rowCheck.some((row) => row.name.toLowerCase() === userInput.toLowerCase())
    ) {
      setError(true);
      return;
    }
    onSubmit({ userInput, selectedType: selectedType ? selectedType : "" });
    //TODO : CATCH ERRORS WHEN onSubmit fails.
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (!open) {
          setUserInput("");
          setSelectedType("");
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="bg-black text-white border border-white/20 hover:bg-white/10 hover:text-white">
          {buttonText}
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-black text-white border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white">{header}</DialogTitle>
          <DialogDescription className="text-white/60">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder={placeholder}
            onChange={(e) => {
              setUserInput(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            className="bg-black text-white border-white/20 placeholder:text-white/40 focus-visible:ring-white/40"
          />
          {error && (
            <DialogDescription className="text-white/60">
              <p className="text-red-500 text-sm">
                TODO: ADD ERROR RESPONSES VIA COMPONENT INPUT.
              </p>
            </DialogDescription>
          )}
          {dropdownOptions.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-black text-white border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {dropdownPlaceholder && !selectedType
                    ? dropdownPlaceholder
                    : selectedType}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-black text-white border-white/20">
                {dropdownOptions.map((type) => (
                  <DropdownMenuItem
                    key={type}
                    onSelect={() => setSelectedType(type)}
                    className="w-full focus:bg-white focus:text-black "
                  >
                    {type}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-white text-black hover:bg-white/80"
          >
            {buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FieldPopUp;
