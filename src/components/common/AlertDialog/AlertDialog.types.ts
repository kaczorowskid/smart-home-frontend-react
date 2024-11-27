import { AlertDialog } from "@/components/ui/alert-dialog";
import { ComponentProps, ReactNode } from "react";

export type AlertDialogProps = {
  title: ReactNode;
  description: ReactNode;
  onOk: () => void;
  trigger?: ReactNode;
  isLoading?: boolean;
} & ComponentProps<typeof AlertDialog>;
