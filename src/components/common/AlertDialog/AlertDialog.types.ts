import { AlertDialog } from "@/components/ui/alert-dialog";
import { ComponentProps, ReactNode } from "react";

export type AlertDialogProps = {
  title: string;
  description: string;
  onOk: () => void;
  trigger?: ReactNode;
  isLoading?: boolean;
} & ComponentProps<typeof AlertDialog>;
