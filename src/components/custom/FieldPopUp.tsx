import { useState } from "react";
import type { CreateDialogProps } from "../../interfaces/ModelInterface";
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

function FieldPopUp({
  header = "header",
  description = "description",
  buttonText = "Button",
  placeholder = "Placeholder",
  rows = [],
  onSubmit,
}: CreateDialogProps) {
  const [userInput, setUserInput] = useState("");
  const typeOptions = ["String", "Number", "Boolean"];
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<boolean>(false);
  console.log("rows in FieldPopUp:", rows);
  const handleSubmit = () => {
    if (!userInput.trim() || !selectedType) return;
    if (rows.some((row) => row.name === userInput)) {
      setError(true);
      return;
    }
    onSubmit({ userInput, selectedType });
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (!open) {
          setUserInput("");
          setSelectedType(null);
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
                This field name is already in use.
              </p>
            </DialogDescription>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full bg-black text-white border-white/20 hover:bg-white/10 hover:text-white"
              >
                {selectedType ?? "Choose a Type"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-black text-white border-white/20">
              {typeOptions.map((type) => (
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
