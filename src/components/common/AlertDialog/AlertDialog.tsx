import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertDialogProps } from "./AlertDialog.types";
import { Button } from "../Button";

export const AlertDialog = ({
  title,
  description,
  onOk,
  trigger,
  isLoading,
  ...props
}: AlertDialogProps) => (
  <ShadcnAlertDialog {...props}>
    <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <Button isLoading={isLoading} onClick={onOk}>
          Ok
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </ShadcnAlertDialog>
);
