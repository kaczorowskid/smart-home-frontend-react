import {
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
  AlertDialog as ShadcnAlertDialog,
} from "@/components/ui/alert-dialog";
import { Button } from "../Button";
import { type AlertDialogProps } from "./AlertDialog.types";

export const AlertDialog = ({
  onOk,
  title,
  trigger,
  isLoading,
  description,
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
        <Button onClick={onOk} isLoading={isLoading}>
          Ok
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </ShadcnAlertDialog>
);
