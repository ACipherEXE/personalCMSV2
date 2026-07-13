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

function CreateDialog({
  header = "header",
  description = "description",
  buttonText = "Button",
  placeholder = "Placeholder",
  onSubmit,
}: CreateDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{buttonText}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder={placeholder} />
        </div>

        <DialogFooter>
          <Button type="submit" onClick={onSubmit}>
            {buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateDialog;
