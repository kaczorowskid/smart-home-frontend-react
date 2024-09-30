import {
  AlertDialogAction,
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

export const AlertDialog = ({
  title,
  description,
  onOk,
  trigger,
  ...props
}: AlertDialogProps) => (
  <ShadcnAlertDialog {...props}>
    <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onOk}>Ok</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </ShadcnAlertDialog>
);
